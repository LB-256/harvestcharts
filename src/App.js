import React, { Component, Fragment } from 'react';
import './App.css';
import github from './github.png';
import { formatUnits } from "@ethersproject/units";
import { obj, ethblocksperday, ethblocksperhour, web3, sushiabi, proxyABI } from './Abi';
import Chart from './chart';
import { Button } from 'semantic-ui-react';
import axios from 'axios';



class App extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      loading: true, 
      n: 3,
      m: 'shares',
      c: 'native',
      a: ethblocksperday,
      copy: false
    }
  }

async componentDidMount(){ 
    this.contractsInitiate()
    const curBlock = await web3.eth.getBlockNumber()   
    await this.getprices()
    const p = await this.sharePromises(obj, curBlock)
    this.chartsGen(p) 
    let m = p.map(contract => {
      return {title: contract.title, shareBlocks: contract.shareBlocks, shares: contract.shares, maxHistory: contract.maxHistory}
    })
    this.setState({loading: false, curBlock: curBlock, share3data: m})
  }

  handleTimeChange = async (event, value) => {
    let val = parseInt(value.value)
    if(val !== this.state.n){
      val === 24 ? this.setState({n: val, a: ethblocksperhour}, () => this.process()) : this.setState({n: val, a: ethblocksperday}, () => this.process()) 
      
    }
  }

  handleChange = async (event, value) => { 
    let val = value.value
    if(val !== this.state.m){
      this.setState({m: val}, () => this.process())  
      
    }  
  }

  handleCurrency = async (event, value) => {
    let val = value.value
    if(val !== this.state.c){
      this.setState({loading: true, c: val}, () => this.charts(obj))
      
    }
  }


async process(){
  this.setState({loading: true})
  if(this.state.m === 'shares'){
    if(this.state.n === 3){ 
      this.chartsGen(this.state.share3data)   
    }
    if(this.state.n === 5){
      if(this.state.share5data !== undefined){
        this.chartsGen(this.state.share5data)  
      }else{
        let m = await this.getData()
        this.chartsGen(m)
        this.setState({share5data: m})
      }
    }
    if(this.state.n === 7){
      if(this.state.share7data !== undefined){
        this.chartsGen(this.state.share7data)  
      }else{
        let m = await this.getData()
        this.chartsGen(m)
        this.setState({share7data: m})
      }
    }
    if(this.state.n === 14){
      if(this.state.share14data !== undefined){
        this.chartsGen(this.state.share14data)  
      }else{
        let m = await this.getData()
        this.chartsGen(m)
        this.setState({share14data: m})
      }
    }
    if(this.state.n === 24){
      if(this.state.share24data !== undefined){
        this.chartsGen(this.state.share24data)  
      }else{
        console.log(this.state.n)
        let m = await this.getData()
        
        this.chartsGen(m)
        this.setState({share24data: m})
      }
    }
    if(this.state.n === 0){
      if(this.state.sharemaxdata !== undefined){
        this.chartsGen(this.state.sharemaxdata)  
      }else{
        let m = await this.getData()
        this.chartsGen(m)
        this.setState({sharemaxdata: m})
      }
    }
  }

  if(this.state.m === 'tvl'){
    if(this.state.n === 3){ 
      if(this.state.tvl3data !== undefined){
        this.chartsGen(this.state.tvl3data)  
      }else{
        let m = await this.getData()
        this.chartsGen(m)
        this.setState({tvl3data: m})
      }
    }
    if(this.state.n === 5){
      if(this.state.tvl5data !== undefined){
        this.chartsGen(this.state.tvl5data)  
      }else{
        let m = await this.getData()
        this.chartsGen(m)
        this.setState({tvl5data: m})
      }
    }
    if(this.state.n === 7){
      if(this.state.tvl7data !== undefined){
        this.chartsGen(this.state.tvl7data)  
      }else{
        let m = await this.getData()
        this.chartsGen(m)
        this.setState({tvl7data: m})
      }
    }
    if(this.state.n === 14){
      if(this.state.tvl14data !== undefined){
        this.chartsGen(this.state.tvl14data)  
      }else{
        let m = await this.getData()
        this.chartsGen(m)
        this.setState({tvl14data: m})
      }
    }
    if(this.state.n === 24){
      if(this.state.tvl24data !== undefined){
        this.chartsGen(this.state.tvl24data)  
      }else{
        let m = await this.getData()
        this.chartsGen(m)
        this.setState({tvl24data: m})
      }
    }
    if(this.state.n === 0){
      if(this.state.tvlmaxdata !== undefined){
        this.chartsGen(this.state.tvlmaxdata)  
      }else{
        let m = await this.getData()
        this.chartsGen(m)
        this.setState({tvlmaxdata: m})
      }
    }
  }

  this.setState({loading: false})
}
  

async getData(){

  let b = await this.sharePromises(obj, this.state.curBlock)
  
  let m = b.map(contract => {
      return {title: contract.title, shareBlocks: contract.shareBlocks, shares: contract.shares, maxHistory: contract.maxHistory}
  })
  return m
}


  getEthPrice = () => axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=USD')
  getBtcPrice = () => axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=USD')

  async getprices(){
    
    try {
      const [ethusd, btcusd] = await axios.all([ this.getEthPrice(), this.getBtcPrice() ])
      
      this.setState({
        btcusd: btcusd["data"]["bitcoin"]["usd"],
        ethusd: ethusd["data"]["ethereum"]["usd"]
      })

      let slparray = obj.filter(contract => contract.native === 'slp')
      
      let promises = slparray.map(async contract => {  
            return [await contract.lpcontractObj.methods.getReserves().call({}, ), await contract.lpcontractObj.methods.totalSupply().call({}, )]               
      })
    
      const a = await Promise.all(promises) 
      
      this.lpCalc(a)
      
    }
    catch (error) {
      console.error(error)     
      return
    }

  }

  lpCalc(a){

    let lp1val = ((parseFloat(formatUnits(a[0][0][0], '18')))+(parseFloat(formatUnits(a[0][0][1], '18'))*this.state.ethusd))/parseFloat(formatUnits(a[0][1], '18'))
    let lp2val = ((parseFloat(formatUnits(a[1][0][0], '6')))+(parseFloat(formatUnits(a[1][0][1], '18'))*this.state.ethusd))/parseFloat(formatUnits(a[1][1], '18'))
    let lp3val = ((parseFloat(formatUnits(a[2][0][0], '18'))*this.state.ethusd)+(parseFloat(formatUnits(a[2][0][1], '6'))))/parseFloat(formatUnits(a[2][1], '18'))
    let lp4val = ((parseFloat(formatUnits(a[3][0][0], '8'))*this.state.btcusd)+(parseFloat(formatUnits(a[3][0][1], '18'))*this.state.ethusd))/parseFloat(formatUnits(a[3][1], '18'))
    let b = [lp1val, lp2val, lp3val, lp4val]
    this.setState({sushilpval: b})

  }

  async sharePromises(o, b){
    console.time('b')
    
    let n = this.state.n
    let m = this.state.m
    let promises = o.map(contract => {
      if(this.state.n > contract.maxHistory && this.state.n !== 24){
        n = contract.maxHistory
      }
      if(this.state.n === 0){
        n = contract.maxHistory
      }
      if(this.state.m === 'shares'){
        m = contract.contractObj.methods.getPricePerFullShare()
      }
      if(this.state.m === 'tvl'){
        m = contract.contractObj.methods.totalSupply()
      }  

      return this.getPrice(contract, n, this.state.a, m, b)
      })

      try {
        const p = await Promise.all(promises)   
        
        console.timeEnd('b')
        
        return p
      } catch (error) {
        console.error(error)     
        return
      }  

  } 

  async getPrice(o, n, a, m, b){
    let shares = []
    let blocks = []
      for (let i = 0; i < n; i++) {
        let block = b - (a*i)   
        shares.push(parseFloat(formatUnits(await m.call({}, block), o.decimals)).toPrecision(10))      
        blocks.push(block)          
      }  
      
      o.shareBlocks = blocks
      o.shares = shares

    return o
  }  

  contractsInitiate(){
    obj.forEach(contract => {
      contract.contractObj = new web3.eth.Contract(proxyABI, contract.add)
      if(contract.lpaddress !== undefined){
        contract.lpcontractObj = new web3.eth.Contract(sushiabi, contract.lpaddress)
      }   
      return contract
    })
  }


  chartsGen(o){
   
    let n = this.state.n
    let a = 0
    
    let datacharts = o.map(contract => {  
      if(this.state.n === 0 || this.state.n > contract.maxHistory){
        n = contract.maxHistory
      }  
      if(this.state.n === 24){
        n = 1
      } 
      
      let percent = this.percentGain(contract.shares)
      let annual = ((percent/n)*365).toPrecision(4)
      let formatPercent = this.state.m === 'shares' ? "<br> Change: " + percent.toPrecision(4) + "%" : ''
      let formatAnnual = this.state.m === 'shares' ? "<br> Annualized: " + annual + "%" : ''
      let ytitle = this.state.m === 'shares' ? '<b>y: share price</b>' : '<b>y: pool value</b>'  
      let yaxisdata = contract.shares
      
      if(this.state.c === 'usd'){
        yaxisdata = this.genUsdShares(contract, a)
        if(contract.native === 'slp'){
          a += 1
        }
      }

      return {x: contract.shareBlocks, y: yaxisdata, title: contract.title, ytitle: ytitle, percent: formatPercent, annual: formatAnnual}
    })
    
    this.setState({charts: datacharts})
    this.setState({loading: false})
    
  }


  genUsdShares(contract, a){
    console.log(a)
    console.log(contract)
    let usdshares = contract.shares.map(share => {
      if(contract.native === 'btc'){
        return share*this.state.btcusd
      }
      if(contract.native === 'eth'){
        return share*this.state.ethusd
      }
      if(contract.native === 'slp'){
        let r = share*this.state.sushilpval[a] 
        
        return r
      }
      
      return share
    })
      
      return usdshares
      
  }

  percentGain(shares){
    return (((shares[0] - shares[shares.length - 1])/shares[shares.length - 1])*100)
  }

  copyToClipboard = () => {
    navigator.clipboard.writeText('0xE9Cd5a8cc8A34638a933Beb1FfBde5D2E30eFEbA')
    this.setState({copy: true})
  }

  


render(){
  
  return (
    <div className="App">
      <header className="App-header">    
      <h1><a href="https://harvest.finance/" target="_blank" rel="noopener noreferrer" id="h1link"><b>Harvest Finance</b></a> fAsset Charts</h1>
      {this.state.loading === false ? 
        <Fragment> 
          <p>Each data point represents 1h for the 24h period & 1d for all other periods. Each contract was initiated at a different time & as such has different max values available. Time periods are calculated using estimated average blocks per day ~6500, this is why the x axis is represented in block numbers. Annualized figures are estimates based on change during the time period. Setting the period to max will take some time to load.</p>
      
          <Button.Group id="main-switch">
            <Button
            value='shares'
            active={this.state.m === 'shares'? true:false}
            onClick={this.handleChange}>Share Prices</Button>
            <Button
            value='tvl'
            active={this.state.m === 'tvl'? true:false}
            onClick={this.handleChange}>Pool TVL</Button>
          </Button.Group>
      

          <Button.Group id="times">
          {/*this.state.m === 'tvl' ? <Button.Group id="currency">
          <Button
            value='native'
            active={this.state.c === 'native'? true:false}
            onClick={this.handleCurrency}>Native Value</Button>
            <Button
            value='usd'
            active={this.state.c === 'usd'? true:false}
            onClick={this.handleCurrency}>USD Value</Button>
      </Button.Group>: null*/}
            <Button
            value='24'
            active={this.state.n === 24? true:false}
            onClick={this.handleTimeChange}>Last 24h</Button>
            <Button
            value='3'
            active={this.state.n === 3 ? true:false}
            onClick={this.handleTimeChange}>3d</Button>
            <Button
            value='5'
            active={this.state.n === 5? true:false}
            onClick={this.handleTimeChange}>5d</Button>
            <Button
            value='7'
            active={this.state.n === 7? true:false}
            onClick={this.handleTimeChange}>7d</Button>
            <Button
            value='14'
            active={this.state.n === 14? true:false}
            onClick={this.handleTimeChange}>14d</Button>
            <Button
            value='0'
            active={this.state.n === 0? true:false}
            onClick={this.handleTimeChange}>Max</Button>
          </Button.Group>
          <Chart charts={this.state.charts}></Chart>

          
          <a href="https://github.com/LB-256/harvestcharts" target="_blank" rel="noopener noreferrer"><img id="githublink" alt="github link" src={github} /></a>
          {
            this.state.copy ?
            <p style={{"color": "green"}}>
              Address copied!
            </p> : null
          }
          <button id="addbtn"
          onClick={() =>  this.copyToClipboard()}
          >
          Many thanks: 0xE9Cd5a8cc8A34638a933Beb1FfBde5D2E30eFEbA
          </button>
         
        </Fragment>
        : <h3>Loading...</h3> }
      </header>          
    </div>
  );
}

}
export default App;
