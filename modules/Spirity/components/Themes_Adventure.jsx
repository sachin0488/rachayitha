import React from "react";
import SearchModal from "../Modal/Modal";
import { useState } from "react";
import data from '../Modal/data.json'
const Adventure = () => {
    const [isModalOpen, setModalOpen] = useState(false)
    const [modalId, setModalId] = useState(null);

    const openModalWithId = (id) => {
        setModalId(id);
        setModalOpen(true);
    };
    return (
        <>
            <SearchModal open={isModalOpen} setOpen={setModalOpen} id={modalId} data={data} />
            <section className="theme-section-male c_fff">
                <div className="section_wrapper">
                    <h2 className="ml64 mr64 ml-m-16 mr-m-16 ttu fs48 fs-m-24 mb36 mb-m-16 fw700 ff_ubuntu dn-mobile">
                        WSA 2024
                        <span className="op0.2">Themes - Fantasy &amp; Adventure</span>
                    </h2>
                    <h2></h2>
                    <h2 className="ml64 mr64 ml-m-16 mr-m-16 ttu fs48 fs-m-24 mb36 mb-m-16 fw700 ff_ubuntu dn-pc theme-header-mobile">
                        <div>
                            <div>WSA</div>
                            <div>2024</div>
                        </div>
                        <div className="op0.2 ml16">
                            <div>Themes - Fantasy</div>
                            <div>&amp; Adventure</div>
                        </div>
                    </h2>
                    <h2>
                        <div className="dn-pc theme-switch">
                            <div className="dn-pc theme-switch-male male-theme-switch-male">
                                <img src="/rachayitha_spirity/male_male.png" />
                            </div>
                            <div className="dn-pc theme-switch-female male-theme-switch-female">
                                <img src="/rachayitha_spirity/male_female.png" />
                            </div>
                        </div>
                        <div className="theme-scroll">
                            <div className="theme-scroll-wrapper dg gtc-s-1 gtc2 gap36 gap-m-16 ml64 mr64  ml-m-16 mr-m-16">
                                <div onClick={() => openModalWithId(1)} className="theme-pic df jcfe fdc pr dialog-review">
                                    <div style={{ backgroundImage: 'url(/rachayitha_spirity/system.jpeg)' }} className="theme-bkg"></div>
                                    <div className="pr z1">
                                        <h3 className="mb4 ttc fs24 fs-m-16 fw700 lh1d5 ff_ubuntu">System</h3>
                                        <p className="fs16 fs-m-14 lh1d5 fw400">
                                            #race #levelup #speed #experience points #system #exp #job #hitpoints #mana #className #strength #agility #vitality
                                            #intelligence #dexterity #skill
                                        </p>
                                    </div>
                                    <div className="dn">
                                        <h3 className="mb4 ttc fs24 lh1d3 fw700">System</h3>
                                        <p className="fs16 lh1d5 mb24">
                                            #race #levelup #speed #experience points #system #exp #job #hitpoints #mana #className #strength #agility #vitality
                                            #intelligence #dexterity #skill
                                        </p>
                                        <p className="fs16 lh1d5 mb24 wspw">
                                            Spin the wheel to claim your daily lottery, including magical weapons, immortal bodies or invincible moves! Complete
                                            this task and you will be rewarded to upgrade to become stronger! ! The following data are your speed, strength,
                                            intelligence, charm, status, hp, mp... you have some points that can be distributed, what choice will you make? !
                                            Whether it&apos;s the end of the world, traveling through another world, or being reborn, you need a powerful enough
                                            support to overcome difficulties, change the life, and &apos;system&apos; is your best choice!!!
                                            &apos;&apos;Ding！Binding the XXX system to the host!&apos;&apos;
                                        </p>
                                        <div className="border-top-primary mb24"></div>
                                        <h3 className="fs24 fw700 lh1d3 mb24">Ideas</h3>
                                        <p className="fs16 lh1d5 mb24 wspw">
                                            <strong>1. </strong>The apocalypse erupted, and the world you were in was destroyed. Fortunately, you traveled back
                                            in time to three years before the apocalypse and obtained a system. By completing the tasks released by the system,
                                            you were able to gradually prevent the apocalypse. With the successful completion of one task after another,
                                            everything seemed to be moving in a good direction. However, the Space Management Bureau discovered anomalies and
                                            detected your existence, in order to maintain the stability of time and space, they sent people to try to kill you,
                                            and in order to save your family and friends, you began a fierce battle with these people. Who will be the ultimate
                                            winner?
                                        </p>
                                        <p className="fs16 lh1d5 mb24 wspw">
                                            <strong>2. </strong>An ordinary young man, due to an accident, obtained a mysterious system. This system can help
                                            him improve various abilities, such as intelligence, physical strength, charm, etc. With the help of the system, the
                                            protagonist begins his comeback life, gradually transforming from an ordinary person to a superhero with powerful
                                            abilities. In this process, he not only faces various challenges from the real world, but also deals with the
                                            mysterious forces behind the system. In the end, the protagonist, with his own wisdom and courage, successfully
                                            uncovered the secrets behind the system and changed his life.
                                        </p>
                                        <p className="fs16 lh1d5 mb24 wspw">
                                            <strong>3. </strong>The MC with poor grades suddenly received a &apos;&apos;top student genius system&apos;&apos;.
                                            Whether is it music, cooking, marksmanship, sports, or even racing, financial expert, military elite… as long as he
                                            want, he can learn through the system and become the most outstanding! And so, step by step, he climbed towards the
                                            pinnacle.
                                        </p>
                                        <div className="border-top-primary mb24"></div>
                                        <h3 className="fs24 fw700 lh1d3 mb24">Examples</h3>
                                        <div className="dg gtc3 gap24 gap-m-16">
                                            <div
                                                className="book-link"
                                                href="https://www.webnovel.com/book/scholar's-advanced-technological-system_12583970906002305"
                                                target="_blank">
                                                <div className="bookCover mb16 mb-m-8">
                                                    <img src="https://img.webnovel.com/bookcover/12583970906002305/150/150.jpg" />
                                                </div>
                                                <h4 className="fs16 fs-m-14 lh1d5 fw400">Scholar&apos;s Advanced Technological System</h4>
                                            </div>
                                            <div className="book-link" href="https://www.webnovel.com/book/my-vampire-system_16709365405930105" target="_blank">
                                                <div className="bookCover mb16 mb-m-8">
                                                    <img src="https://img.webnovel.com/bookcover/16709365405930105/150/150.jpg" />
                                                </div>
                                                <h4 className="fs16 fs-m-14 lh1d5 fw400">My Vampire System</h4>
                                            </div>
                                            <div
                                                className="book-link"
                                                href="https://www.webnovel.com/book/reincarnated-with-the-strongest-system_19720038005035905"
                                                target="_blank">
                                                <div className="bookCover mb16 mb-m-8">
                                                    <img src="https://img.webnovel.com/bookcover/19720038005035905/150/150.jpg" />
                                                </div>
                                                <h4 className="fs16 fs-m-14 lh1d5 fw400">Reincarnated With The Strongest System</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => openModalWithId(2)} className="theme-pic df jcfe fdc pr dialog-review">
                                    <div style={{ backgroundImage: 'url(/rachayitha_spirity/villain.jpeg)' }} className="theme-bkg"></div>
                                    <div className="pr z1">
                                        <h3 className="mb4 ttc fs24 fs-m-16 fw700 lh1d5 ff_ubuntu">Villain</h3>
                                        <p className="fs16 fs-m-14 lh1d5 fw400">
                                            #villain #weaktostrong #overpowered #transmigration #nonhuman #magic # academy #action #cultivation #genius
                                            #apocalypse #dark
                                        </p>
                                    </div>
                                    <div className="dn">
                                        <h3 className="mb4 ttc fs24 lh1d3 fw700">Villain</h3>
                                        <p className="fs16 lh1d5 mb24">
                                            #villain #weaktostrong #overpowered #transmigration #nonhuman #magic # academy #action #cultivation #genius
                                            #apocalypse #dark
                                        </p>
                                        <p className="fs16 lh1d5 mb24 wspw">
                                            Are you tired of being the righteous and heroic character? Ever considered doing things that excites you most, but
                                            stopped out of consideration to others? Well time to ditch all that humanity away, let your creativity run wild and
                                            embrace the way of the Villain!
                                        </p>
                                        <div className="border-top-primary mb24"></div>
                                        <h3 className="fs24 fw700 lh1d3 mb24">Ideas</h3>
                                        <p className="fs16 lh1d5 mb24 wspw">
                                            <strong>1. </strong>MC tried to lead a sincere and unremarkable life, yet found himself subjected to continuous
                                            mockery, ridicule, and mistreatment from his peers. After enduring years of abuse, he awoke one fateful day,
                                            resolved to assert himself. However, before he could act, an unfortunate incident abruptly ended his life. In a
                                            surprising turn of events, he got transmigrated and this time, he is determined to take things into his own hands
                                            and do the things he desires, even if it means resorting to extreme measures! If he is to be a villain, then so be
                                            it!
                                        </p>
                                        <p className="fs16 lh1d5 mb24 wspw">
                                            <strong>2. </strong>You were a Demon King in your past life who died in an unfortunate incident, a God you met wants
                                            to take matter into his own hands as he handed you a system that forces you to do good things in exchange for
                                            enhancement and power ups. But as the saying goes, a leopard never changes its spots, a Villain too! Sometimes you
                                            follow the system out of curiosity, but most of the time you stick to your villainous way, facing the punishments
                                            head on as you try to break the system. and maybe kill that damned God.
                                        </p>
                                        <p className="fs16 lh1d5 mb24 wspw">
                                            <strong>3. </strong>You woke up in an unfamiliar world, equipped with a Villain system that will end your life if
                                            you didn&apos;t accomplish the mission within the required time given. You cursed the gods as you close the system
                                            interface, but the more you looked around... Your new life is enveloped by riches and surrounded by beautiful women
                                            who lowered their heads waiting to serve you. You thought to yourself, meh this life ain&apos;t that bad after
                                            all...
                                        </p>
                                        <div className="border-top-primary mb24"></div>
                                        <h3 className="fs24 fw700 lh1d3 mb24">Examples</h3>
                                        <div className="dg gtc3 gap24 gap-m-16">
                                            <div
                                                className="book-link"
                                                href="https://www.webnovel.com/book/birth-of-the-demonic-sword_14187175405584205"
                                                target="_blank">
                                                <div className="bookCover mb16 mb-m-8">
                                                    <img src="https://img.webnovel.com/bookcover/14187175405584205/150/150.jpg" />
                                                </div>
                                                <h4 className="fs16 fs-m-14 lh1d5 fw400">Birth of the Demonic Sword</h4>
                                            </div>
                                            <div
                                                className="book-link"
                                                href="https://www.webnovel.com/book/why-should-i-stop-being-a-villain_25192311005140805"
                                                target="_blank">
                                                <div className="bookCover mb16 mb-m-8">
                                                    <img src="https://img.webnovel.com/bookcover/25192311005140805/150/150.jpg" />
                                                </div>
                                                <h4 className="fs16 fs-m-14 lh1d5 fw400">Why Should I Stop Being a Villain</h4>
                                            </div>
                                            <div
                                                className="book-link"
                                                href="https://www.webnovel.com/book/warlock-of-the-magus-world_8058923005003605"
                                                target="_blank">
                                                <div className="bookCover mb16 mb-m-8">
                                                    <img src="https://img.webnovel.com/bookcover/8058923005003605/150/150.jpg" />
                                                </div>
                                                <h4 className="fs16 fs-m-14 lh1d5 fw400">Warlock of the Magus World</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => openModalWithId(3)} className="theme-pic df jcfe fdc pr dialog-review">
                                    <div style={{ backgroundImage: 'url(/rachayitha_spirity/slice_of_life.jpeg)' }} className="theme-bkg"></div>
                                    <div className="pr z1">
                                        <h3 className="mb4 ttc fs24 fs-m-16 fw700 lh1d5 ff_ubuntu">Slice of Life</h3>
                                        <p className="fs16 fs-m-14 lh1d5 fw400">
                                            #slifeoflife #romance #comedy #harem #action #ordinary #genius #mmorpg #adventure
                                        </p>
                                    </div>
                                    <div className="dn">
                                        <h3 className="mb4 ttc fs24 lh1d3 fw700">Slice of Life</h3>
                                        <p className="fs16 lh1d5 mb24">#slifeoflife #romance #comedy #harem #action #ordinary #genius #mmorpg #adventure</p>
                                        <p className="fs16 lh1d5 mb24 wspw">
                                            Other than gaining power or fighting, the daily interactions between characters is also a part of the novel that can
                                            be very interesting and attract readers. Like the interaction between lovers, between friends, between parents and
                                            children, or even between MC and villain. This is a theme than can where you can gain inspirations from just your
                                            daily life.
                                        </p>
                                        <div className="border-top-primary mb24"></div>
                                        <h3 className="fs24 fw700 lh1d3 mb24">Ideas</h3>
                                        <p className="fs16 lh1d5 mb24 wspw">
                                            <strong>1. </strong>You woke up one day and and found a 3 year-old girl waiting at your doorstep, saying she&apos;s
                                            your daughter, with a DNA certificate as proof. Bewildered and at a loss of what to do, you can only start to learn
                                            of how to take care of a child while trying to search for her mother.
                                        </p>
                                        <p className="fs16 lh1d5 mb24 wspw">
                                            <strong>2. </strong>A new vrmmorpg has entered the market, and your gang of friends and you have decided to switch
                                            to this new game together from your various different games to have fun together. From leveling up to forming a
                                            guild, from fighting enemy guilds to tackling down bosses, all of this is only more meaningful because you are doing
                                            it with your friends(and maybe lover).
                                        </p>
                                        <p className="fs16 lh1d5 mb24 wspw">
                                            <strong>3. </strong>You are reborn into a fantasy world as a child, and to your shock(or maybe delight), you were
                                            already engaged to two princess from different races. Determined to have ownership of your own life(you were
                                            actually just afraid they were too ugly), you escaped from home(under under secret protection all the time) and
                                            traveled to foreign lands to see how your fiances looked like, whilst keeping your identity a secret. During your
                                            travel, you encountered two girls from different races whom you formed a friendship with. (You can probably guess
                                            who these girls are.)
                                        </p>
                                        <div className="border-top-primary mb24"></div>
                                        <h3 className="fs24 fw700 lh1d3 mb24">Examples</h3>
                                        <div className="dg gtc3 gap24 gap-m-16">
                                            <div
                                                className="book-link"
                                                href="https://www.webnovel.com/book/back-for-my-daughter_20559228005448805"
                                                target="_blank">
                                                <div className="bookCover mb16 mb-m-8">
                                                    <img src="https://img.webnovel.com/bookcover/20559228005448805/150/150.jpg" />
                                                </div>
                                                <h4 className="fs16 fs-m-14 lh1d5 fw400">Back For My Daughter</h4>
                                            </div>
                                            <div className="book-link" href="https://www.webnovel.com/book/the-king's-avatar_7176992105000305" target="_blank">
                                                <div className="bookCover mb16 mb-m-8">
                                                    <img src="https://img.webnovel.com/bookcover/7176992105000305/150/150.jpg" />
                                                </div>
                                                <h4 className="fs16 fs-m-14 lh1d5 fw400">The King&apos;s Avatar</h4>
                                            </div>
                                            <div
                                                className="book-link"
                                                href="https://www.webnovel.com/book/my-three-wives-are-beautiful-vampires._20553633305398405"
                                                target="_blank">
                                                <div className="bookCover mb16 mb-m-8">
                                                    <img src="https://img.webnovel.com/bookcover/20553633305398405/150/150.jpg" />
                                                </div>
                                                <h4 className="fs16 fs-m-14 lh1d5 fw400">My Three Wives Are Beautiful Vampires.</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => openModalWithId(4)} className="theme-pic df jcfe fdc pr dialog-review">
                                    <div style={{ backgroundImage: 'url(/rachayitha_spirity/new_tropes.png)' }} className="theme-bkg"></div>
                                    <div className="pr z1">
                                        <h3 className="mb4 ttc fs24 fs-m-16 fw700 lh1d5 ff_ubuntu">Fantasy&amp;Adventure: New Tropes</h3>
                                        <p className="fs16 fs-m-14 lh1d5 fw400">#showbiz #nonhuman #scifi #Myth #Legends #Eastern Fantasy #Western Fantasy</p>
                                    </div>
                                    <div className="dn">
                                        <h3 className="mb4 ttc fs24 lh1d3 fw700">Fantasy&amp;Adventure: New Tropes</h3>
                                        <p className="fs16 lh1d5 mb24">#showbiz #nonhuman #scifi #Myth #Legends #Eastern Fantasy #Western Fantasy</p>
                                        <p className="fs16 lh1d5 mb24 wspw">
                                            In this category, we are exploring other more niche themes and new concepts in order to inspire more stories that
                                            are innovative and unconventional! If you are someone who does not like to follow the crowd and want to pursue
                                            alternative ideas for your next story, why not check out some of these prompts!
                                        </p>
                                        <div className="border-top-primary mb24"></div>
                                        <h3 className="fs24 fw700 lh1d3 mb24">Ideas</h3>
                                        <p className="fs16 lh1d5 mb24 wspw">
                                            <strong>1. </strong>Showbiz Lights, camera, action! Many are drawn to the dazzling lights of the red carpet and the
                                            glitz and glamour of fame. But what does one have to do to reach there in the first place? You take the plunge into
                                            the world of showbiz where whatever you see on screen may not be what appears in real life. Will you be one of them
                                            who makes it to the big screens? Or maybe you prefer to be the one behind the scenes and guiding people towards it
                                            instead?
                                        </p>
                                        <p className="fs16 lh1d5 mb24 wspw">
                                            <strong>2. </strong>Non-human Being granted a second chance in life was a blessing, but what you did not expect was
                                            that you were also changed into something that was no longer human. In a new world that you have never seen before,
                                            how would you live your new life in a body that is completely foreign to you? Are you shunned here? Or are you just
                                            accepted as one of the many races in this world? Do you accept your new body or do you find a way to revert yourself
                                            back to your old one? The choice is yours.
                                        </p>
                                        <p className="fs16 lh1d5 mb24 wspw">
                                            <strong>3. </strong>Mass golden finger A system appears, a magical ability is possessed, or an opportunity to
                                            cultivate is placed in front of you!!! You are extremely happy, you are proud, you think you are the chosen one! But
                                            the next moment, you find that everyone around you has also received various cheats, super powers, and magical
                                            systems! ! ! Flying with a sword, summoning spiritual beasts, overwhelming mountains and seas... What can you do to
                                            become a master, a strong person, and surpass everyone in this era of universal cultivation? !
                                        </p>
                                        <p className="fs16 lh1d5 mb24 wspw">
                                            <strong>4. </strong>Myth and Legends Think about those myths and stories that have been passed down for thousands of
                                            years, those glorious and magnificent legends. The World Tree formed the entire world, Ymir’s corpse created all
                                            things; Prometheus stole fire from heaven and gave it to the human world; the chinese hero Hou Yi shot down nine
                                            suns from the sky and solved the drought on earth... If you rely on the background of these mythical worlds,
                                            continue building on it or rewrite, using your endless imagination, who knows what wonderful stories you will
                                            create!!!
                                        </p>
                                        <p className="fs16 lh1d5 mb24 wspw">
                                            <strong>5. </strong>Space and Mecha In the realm of cutting-edge technology, a brilliant scientist proposed a
                                            revolutionary machine suit for the military, only to face rejection due to the risk it possessed and the danger of
                                            having such an enormous power held by a small group of people. The government, deeming the research too dangerous,
                                            seized it forcibly, leading to a tragic mistake resulting in the scientist&apos;s untimely demise. Witnessing this
                                            harrowing scene, the scientist&apos;s son, fueled by a burning desire for justice, vowed to avenge his father&apos;s
                                            wrongful death. Over the course of a decade, he unearthed his father&apos;s secret notes, unveiling a trove of
                                            hidden knowledge that allowed him to enhance and upgrade the once-rejected machine suit. Harnessing this advanced
                                            technology, he engineered an army of formidable robots, poised to challenge the oppressive government and reclaim
                                            justice for his father&apos;s legacy.
                                        </p>
                                        <div className="border-top-primary mb24"></div>
                                        <h3 className="fs24 fw700 lh1d3 mb24">Examples</h3>
                                        <div className="dg gtc3 gap24 gap-m-16">
                                            <div
                                                className="book-link"
                                                href="https://www.webnovel.com/book/superstars-of-tomorrow_7930180406001605"
                                                target="_blank">
                                                <div className="bookCover mb16 mb-m-8">
                                                    <img src="https://img.webnovel.com/bookcover/7930180406001605/150/150.jpg" />
                                                </div>
                                                <h4 className="fs16 fs-m-14 lh1d5 fw400">Superstars of Tomorrow</h4>
                                            </div>
                                            <div className="book-link" href="https://www.webnovel.com/book/is-that-a-wisp_15298758705788905" target="_blank">
                                                <div className="bookCover mb16 mb-m-8">
                                                    <img src="https://img.webnovel.com/bookcover/15298758705788905/150/150.jpg" />
                                                </div>
                                                <h4 className="fs16 fs-m-14 lh1d5 fw400">Is that a Wisp?</h4>
                                            </div>
                                            <div
                                                className="book-link"
                                                href="https://www.webnovel.com/book/global-lord-100%25-drop-rate_24233205406226805"
                                                target="_blank">
                                                <div className="bookCover mb16 mb-m-8">
                                                    <img src="https://img.webnovel.com/bookcover/24233205406226805/150/150.jpg" />
                                                </div>
                                                <h4 className="fs16 fs-m-14 lh1d5 fw400">Global Lord: 100% Drop Rate</h4>
                                            </div>
                                            <div
                                                className="book-link"
                                                href="https://www.webnovel.com/book/the-spiritual-attainment-of-minghe_8324028306000405"
                                                target="_blank">
                                                <div className="bookCover mb16 mb-m-8">
                                                    <img src="https://img.webnovel.com/bookcover/8324028306000405/150/150.jpg" />
                                                </div>
                                                <h4 className="fs16 fs-m-14 lh1d5 fw400">The Spiritual Attainment of Minghe</h4>
                                            </div>
                                            <div
                                                className="book-link"
                                                href="https://www.webnovel.com/book/humanity's-greatest-mecha-warrior-system_23118185006257505"
                                                target="_blank">
                                                <div className="bookCover mb16 mb-m-8">
                                                    <img src="https://img.webnovel.com/bookcover/23118185006257505/150/150.jpg" />
                                                </div>
                                                <h4 className="fs16 fs-m-14 lh1d5 fw400">Humanity&apos;s Greatest Mecha Warrior System</h4>
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

export default Adventure;