import React, { Component, Fragment } from 'react';
import './App.css';
import { formatUnits } from "@ethersproject/units";
import { obj, ethblocksperday, ethblocksperhour, times, web3 } from './Abi';
import Chart from './chart';
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      loading: true, 
      blocknumbers: null, 
      charts: null,
      n: 3,
      a: ethblocksperday
    }
  }

async componentDidMount(){ 
    console.time('a')
    this.contractsInitiate()
    await this.sharePromises(obj)
    this.setState({loading: false})
    console.timeEnd('a')
  }

  onChangeDropDown = async (event, data) => {
    console.time('b')
    if(data.value !== this.state.n){
      this.setState({loading: true})
      if(data.value === 24){
        this.setState({a: ethblocksperhour})
      }else{
        this.setState({a: ethblocksperday})
      }
        this.setState({ n: data.value })  
        await this.sharePromises(obj)
    }
    console.timeEnd('b')
  }

  async sharePromises(o){
    
    const curBlock = await web3.eth.getBlockNumber()
    let n = this.state.n
    let promises = o.map(contract => {
      if(n === 'max'){
        n = contract.maxHistory
      }
      return this.getPrice(contract, curBlock, n, this.state.a)
      })

      try {
        await Promise.all(promises)   
        this.chartsGen(o, n)
        this.setState({loading: false})
      } catch (error) {
        console.log(error)     
      }  

  } 


  async getPrice(o, curBlock, n, a){
    let shareprices = o
    let shares = []
    let blocks = []
      for (let i = 0; i < n; i++) {
        let block = curBlock - (a*i)   
        shares.push(parseFloat(formatUnits(await shareprices.contractObj.methods.getPricePerFullShare().call({}, block), shareprices.decimals)))      
        blocks.push(block)  
      }
      shareprices.shareBlocks = blocks
      shareprices.shares = shares
    return shareprices
  }  

  contractsInitiate(){
    obj.forEach(contract => {
      contract.contractObj = new web3.eth.Contract(contract.abi, contract.add)
      return contract
    })
  }


  chartsGen(o, n){
    let datacharts = o.map(contract => {  
      if(n === 24){
        n = 1
      }else if(n === 'max'){
        n = contract.maxHistory
      }  
      let percent = this.percentGain(contract.shares)
      let annual = ((percent/n)*365).toPrecision(4)
      return {x: contract.shareBlocks, y: contract.shares, title: contract.title, percent: percent.toPrecision(4), annual: annual}
    })
    this.setState({charts: datacharts})
  }

  percentGain(shares){
    return (((shares[0] - shares[shares.length - 1])/shares[shares.length - 1])*100)
  }


render(){
  return (
    <div className="App">
      <header className="App-header">    
      <h1><a href="https://harvest.finance/" target="_blank" rel="noopener noreferrer">Harvest Finance</a> fAsset share price charts</h1>
      {this.state.loading === false ? 
        <Fragment> 
          <p>Each data point represents 1 hour for the 24h period & 1d for all other periods, each contract was initiated at a different time & as such have different max values available. Each time period is calculated using estimated average blocks per day ~6500, this is why the x axis is represented in block numbers. Setting the period on max will take some time to load values from all assets.</p>
          <Dropdown placeholder="Select time period" selection onChange={this.onChangeDropDown} options={times} selectOnBlur={false} />
          <Chart charts={this.state.charts} blocknumbers={this.state.blocknumbers} n={this.state.n}></Chart>
        </Fragment>
        : <h3>Loading...</h3> }
      </header>          
    </div>
  );
}

}
export default App;
