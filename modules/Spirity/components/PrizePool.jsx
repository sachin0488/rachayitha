import React from 'react'
import { usePrizeListService } from '../service/PrizeList.service'

const Prizepool = () => {
  const { data: prizeList, isLoading, isError } = usePrizeListService()

  return (
    <section className="prize-section">
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error</p>
      ) : (
        <div className="section_wrapper section_wrapper_pb20">
          <div className="ml64 mr64 ml-m-16 mr-m-16">
            <h2>
              <div className="dg db-s gtc-m-1 gtc3 gap36 mb36 mb-m-24">
                {prizeList?.map((prize, index) => {
                  return (
                    <div key={prize?.id} className="pt20 pb44 pt-m-16 pb-m-24 border-top-primary lh1d5">
                      <h3 className="ttc fs24 fw700 mb8 ff_ubuntu">{prize?.prize_name}</h3>
                      <div className="df mb8 mb-m-24">
                        <p className="fs16 fs-m-14 fw400 wspw">
                          {prize?.prize_money} INR {prize?.prize_description}
                        </p>
                        <img className="prize-img mb8" src={prize?.prize_logo} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </h2>
          </div>
        </div>
      )}
    </section>
  )
}

export default Prizepool
