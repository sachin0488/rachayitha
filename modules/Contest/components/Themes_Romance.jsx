import React from 'react'
import SearchModal from '../ThemeDetailsModal/Modal'
import { useState } from 'react'
import data from '../ThemeDetailsModal/data.json'
const Romance = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [modalId, setModalId] = useState(null)

  const openModalWithId = id => {
    setModalId(id)
    setModalOpen(true)
  }
  return (
    <>
      <SearchModal open={isModalOpen} setOpen={setModalOpen} id={modalId} data={data} />
      <section className="theme-section-female c_fff dn-mobile">
        <div className="section_wrapper">
          <h2 className="ml64 mr64 ml-m-16 mr-m-16 ttu fs48 fs-m-24 mb36 mb-m-16 fw700 ff_ubuntu dn-mobile">
            WSA 2024
            <span className="op0.2">Themes - Romance</span>
          </h2>
          <h2></h2>
          <h2 className="ml64 mr64 ml-m-16 mr-m-16 ttu fs48 fs-m-24 mb36 mb-m-16 fw700 ff_ubuntu dn-pc theme-header-mobile">
            <div>
              <div>WSA</div>
              <div>2024</div>
            </div>
            <div className="op0.2 ml16">
              <div>Themes - </div>
              <div>Romance</div>
            </div>
          </h2>
          <h2>
            <div className="dn-pc theme-switch">
              <div className="dn-pc theme-switch-male female-theme-switch-male">
                <img src="/contest/female_male.png" />
              </div>
              <div className="dn-pc theme-switch-female female-theme-switch-female">
                <img src="/contest/female_female.png" />
              </div>
            </div>

            <div className="theme-scroll">
              <div className="theme-scroll-wrapper dg gtc-s-1 gtc2 gap36 gap-m-16 ml64 mr64  ml-m-16 mr-m-16">
                <div onClick={() => openModalWithId(1)} className="theme-pic df jcfe fdc pr dialog-review">
                  <div style={{ backgroundImage: 'url(/contest/ceo.jpeg)' }} className="theme-bkg"></div>
                  <div className="pr z1">
                    <h3 className="mb4 ttc fs24 fs-m-16 fw700 lh1d5 ff_ubuntu">Billionaire/CEO</h3>
                    <p className="fs16 fs-m-14 lh1d5 fw400">#ceo #bigshot #loveaftermarriage #pregnancy #sweetlove</p>
                  </div>
                  <div className="dn">
                    <h3 className="mb4 ttc fs24 lh1d3 fw700">Billionaire/CEO</h3>
                    <p className="fs16 lh1d5 mb24">#ceo #bigshot #loveaftermarriage #pregnancy #sweetlove</p>
                    <p className="fs16 lh1d5 mb24 wspw">
                      Rich, powerful and handsome men have the world at their fingertips. They can be aloof, arrogant, ruthless and
                      downright cruel. But when they fall in love and are conquered by their one true love, can they still keep their cold
                      haughty attitudes? Let your FL conquer these modern day conquerors and show them she&apos;s not to be messed
                      with!&apos;&apos;
                    </p>
                    <div className="border-top-primary mb24"></div>
                    <h3 className="fs24 fw700 lh1d3 mb24">Examples</h3>
                    <div className="dg gtc3 gap24 gap-m-16">
                      <div
                        className="book-link"
                        href="https://www.webnovel.com/book/he-stole-me-from-my-deadbeat-husband_26106584405049305"
                        target="_blank">
                        <div className="bookCover mb16 mb-m-8">
                          <img src="https://img.webnovel.com/bookcover/26106584405049305/150/150.jpg" />
                        </div>
                        <h4 className="fs16 fs-m-14 lh1d5 fw400">He Stole Me From My Deadbeat Husband</h4>
                      </div>
                      <div
                        className="book-link"
                        href="https://www.webnovel.com/book/ons-pregnant-with-ceo's-baby_22123968405360705"
                        target="_blank">
                        <div className="bookCover mb16 mb-m-8">
                          <img src="https://img.webnovel.com/bookcover/22123968405360705/150/150.jpg" />
                        </div>
                        <h4 className="fs16 fs-m-14 lh1d5 fw400">ONS: Pregnant With CEO&apos;s Baby</h4>
                      </div>
                      <div
                        className="book-link"
                        href="https://www.webnovel.com/book/the-president%E2%80%99s-pregnant-ex-wife_26312986506956805"
                        target="_blank">
                        <div className="bookCover mb16 mb-m-8">
                          <img src="https://img.webnovel.com/bookcover/26312986506956805/150/150.jpg" />
                        </div>
                        <h4 className="fs16 fs-m-14 lh1d5 fw400">The President’s Pregnant, Ex-Wife</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div onClick={() => openModalWithId(2)} className="theme-pic df jcfe fdc pr dialog-review">
                  <div style={{ backgroundImage: 'url(/contest/werewolf.jpeg)' }} className="theme-bkg"></div>
                  <div className="pr z1">
                    <h3 className="mb4 ttc fs24 fs-m-16 fw700 lh1d5 ff_ubuntu">Werewolf</h3>
                    <p className="fs16 fs-m-14 lh1d5 fw400">#alpha #fatedlove/truelove #enemiestolovers #mates</p>
                  </div>
                  <div className="dn">
                    <h3 className="mb4 ttc fs24 lh1d3 fw700">Werewolf</h3>
                    <p className="fs16 lh1d5 mb24">#alpha #fatedlove/truelove #enemiestolovers #mates</p>
                    <p className="fs16 lh1d5 mb24 wspw">
                      You suddenly smell a special fragrance. Your body has never been so relaxed, but your mind is on fire. There is a
                      force beating in the body. You hear a voice from your wolf: Mate! Oh, the man across from you turned his head. You can
                      tell from the red corners of his eyes that he must have sensed the special smell, too. Oh, come on. How could your
                      mate be him?
                    </p>
                    <div className="border-top-primary mb24"></div>
                    <h3 className="fs24 fw700 lh1d3 mb24">Examples</h3>
                    <div className="dg gtc3 gap24 gap-m-16">
                      <div
                        className="book-link"
                        href="https://www.webnovel.com/book/the-alpha-claiming-his-enemy's-daughter_25392203506078605"
                        target="_blank">
                        <div className="bookCover mb16 mb-m-8">
                          <img src="https://img.webnovel.com/bookcover/25392203506078605/150/150.jpg" />
                        </div>
                        <h4 className="fs16 fs-m-14 lh1d5 fw400">The Alpha: Claiming His Enemy&apos;s Daughter</h4>
                      </div>
                      <div
                        className="book-link"
                        href="https://www.webnovel.com/book/chosen-by-fate-rejected-by-the-alpha_18459793506910305"
                        target="_blank">
                        <div className="bookCover mb16 mb-m-8">
                          <img src="https://img.webnovel.com/bookcover/18459793506910305/150/150.jpg" />
                        </div>
                        <h4 className="fs16 fs-m-14 lh1d5 fw400">Chosen By Fate, Rejected By The Alpha</h4>
                      </div>
                      <div className="book-link" href="https://www.webnovel.com/book/his-chosen-mate_23808443506612005" target="_blank">
                        <div className="bookCover mb16 mb-m-8">
                          <img src="https://img.webnovel.com/bookcover/23808443506612005/150/150.jpg" />
                        </div>
                        <h4 className="fs16 fs-m-14 lh1d5 fw400">His Chosen Mate</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div onClick={() => openModalWithId(3)} className="theme-pic df jcfe fdc pr dialog-review">
                  <div style={{ backgroundImage: 'url(/contest/fantasy_romance.jpeg)' }} className="theme-bkg"></div>
                  <div className="pr z1">
                    <h3 className="mb4 ttc fs24 fs-m-16 fw700 lh1d5 ff_ubuntu">Fantasy Romance</h3>
                    <p className="fs16 fs-m-14 lh1d5 fw400">#vampire #beast #demon #transmigration #system</p>
                  </div>
                  <div className="dn">
                    <h3 className="mb4 ttc fs24 lh1d3 fw700">Fantasy Romance</h3>
                    <p className="fs16 lh1d5 mb24">#vampire #beast #demon #transmigration #system</p>
                    <p className="fs16 lh1d5 mb24 wspw">
                      From vampire to witch, mermaids to elves, gods to demons, from rebirth to transmigration, system to superpowers, the
                      only limits for the world of fantasy belong beyond the horizon. Indulge in myths of old or tales derived from the
                      recent century—it is time to step into the world of fantasy and magic.
                    </p>
                    <div className="border-top-primary mb24"></div>
                    <h3 className="fs24 fw700 lh1d3 mb24">Examples</h3>
                    <div className="dg gtc3 gap24 gap-m-16">
                      <div
                        className="book-link"
                        href="https://www.webnovel.com/book/married-to-the-devil's-son_14205835806705305"
                        target="_blank">
                        <div className="bookCover mb16 mb-m-8">
                          <img src="https://img.webnovel.com/bookcover/14205835806705305/150/150.jpg" />
                        </div>
                        <h4 className="fs16 fs-m-14 lh1d5 fw400">Married to the Devil&apos;s Son</h4>
                      </div>
                      <div
                        className="book-link"
                        href="https://www.webnovel.com/book/the-masked-vampire-king's-accidental-bride_26357929606101205"
                        target="_blank">
                        <div className="bookCover mb16 mb-m-8">
                          <img src="https://img.webnovel.com/bookcover/26357929606101205/150/150.jpg" />
                        </div>
                        <h4 className="fs16 fs-m-14 lh1d5 fw400">The Masked Vampire King&apos;s Accidental Bride</h4>
                      </div>
                      <div
                        className="book-link"
                        href="https://www.webnovel.com/book/after-surviving-the-apocalypse-i-built-a-city-in-another-world_26625133006952605"
                        target="_blank">
                        <div className="bookCover mb16 mb-m-8">
                          <img src="https://img.webnovel.com/bookcover/26625133006952605/150/150.jpg" />
                        </div>
                        <h4 className="fs16 fs-m-14 lh1d5 fw400">After Surviving the Apocalypse, I Built a City in Another World</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div onClick={() => openModalWithId(4)} className="theme-pic df jcfe fdc pr dialog-review">
                  <div style={{ backgroundImage: 'url(/contest/royal.jpeg)' }} className="theme-bkg"></div>
                  <div className="pr z1">
                    <h3 className="mb4 ttc fs24 fs-m-16 fw700 lh1d5 ff_ubuntu">Royal</h3>
                    <p className="fs16 fs-m-14 lh1d5 fw400">#royalfamily #arrangedmarriage #forbiddenlove #princess</p>
                  </div>
                  <div className="dn">
                    <h3 className="mb4 ttc fs24 lh1d3 fw700">Royal</h3>
                    <p className="fs16 lh1d5 mb24">#royalfamily #arrangedmarriage #forbiddenlove #princess</p>
                    <p className="fs16 lh1d5 mb24 wspw">
                      The life of royalty isn&apos;t a bed of roses - it&apos;s too easy to be embroiled in steamy forbidden romances, court
                      drama, royal power struggles and political schemes as your character tries to reach their happily ever after. Be it
                      dashing dukes, blushing maidens or plotting concubines, no one can escape the power of a royal&apos;s love. It&apos;s
                      time to sweep your readers off their feet with a passionate royal romance!&apos;&apos;
                    </p>
                    <div className="border-top-primary mb24"></div>
                    <h3 className="fs24 fw700 lh1d3 mb24">Examples</h3>
                    <div className="dg gtc3 gap24 gap-m-16">
                      <div className="book-link" href="https://www.webnovel.com/book/under-the-oak-tree_21949582605391005" target="_blank">
                        <div className="bookCover mb16 mb-m-8">
                          <img src="https://img.webnovel.com/bookcover/21949582605391005/150/150.jpg" />
                        </div>
                        <h4 className="fs16 fs-m-14 lh1d5 fw400">Under the Oak Tree</h4>
                      </div>
                      <div
                        className="book-link"
                        href="https://www.webnovel.com/book/the-duke's-masked-wife_23745360306013705"
                        target="_blank">
                        <div className="bookCover mb16 mb-m-8">
                          <img src="https://img.webnovel.com/bookcover/23745360306013705/150/150.jpg" />
                        </div>
                        <h4 className="fs16 fs-m-14 lh1d5 fw400">The Duke&apos;s Masked Wife</h4>
                      </div>
                      <div className="book-link" href="https://www.webnovel.com/book/garden-of-poison_26003956505658105" target="_blank">
                        <div className="bookCover mb16 mb-m-8">
                          <img src="https://img.webnovel.com/bookcover/26003956505658105/150/150.jpg" />
                        </div>
                        <h4 className="fs16 fs-m-14 lh1d5 fw400">Garden Of Poison</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </h2>
        </div>
      </section>
    </>
  )
}

export default Romance
