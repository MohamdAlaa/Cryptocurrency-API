import React from 'react'
import CoinItem from './CoinItem'
import './Coins.css'

const Coins = (props) => {
  return (
        <div className='container'>
            <div>
                <div className='heading'>
                    <p>#</p>
                    <p className='coin-name'>Coins</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Mkt Cap</p>
                </div>
            </div>

            {props.coins.map(coins =>{
                return (
                    <CoinItem coins={coins} key={coins.id}/>
                )
            })}
           
        </div>
  )
}

export default Coins