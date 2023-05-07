import Image from "next/image";

import Drawer from "./Drawer.jsx";
import Footer from "./Footer.js";
import Menu from "./Menu.jsx";

export default function Donkey() {
  return (
    <>
      <Menu />
      <main className=" flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-around lg:pb-6 lg:pt-28 ">
        <section className=" mb-12 flex  w-full max-w-[800px]  flex-col p-4">
          <article className="flex  flex-col gap-2 text-lg  ">
            <h2 className="py-2 pl-4 font-title  text-4xl">
              Donkey Don&apos;t Die
            </h2>
            <p className="p-4">
              With the right motivation, even a misfortunate person can become a
              millionaire.
            </p>
            <Drawer opened={true} title={`Short Synopsis:`}>
              {/* <h3 className="py-4  text-2xl font-bold">Short Synopsis:</h3> */}
              <p>
                Victor, a man who has just lost his job, is informed that he
                will inherit one billion dollars from his late uncle on
                condition that he first earns one million dollars through honest
                work within a year. The catch is that his second cousin, Felix,
                also stands to inherit. Victor teams up with his family to earn
                the million. On the other hand, Felix does everything to stop
                him. Eventually, the family comes together in a heartwarming
                finale, showcasing their talents and finding unexpected success.
              </p>
            </Drawer>
            <Drawer opened={false} title={`Synopsis:`}>
              {/* <h3 className="py-4 text-2xl font-bold">Synopsis:</h3> */}
              <p>
                A heartwarming and comedic tale that follows the journey of
                Victor, a man who unexpectedly finds himself facing a series of
                challenges and setbacks. After losing his job at a wine factory,
                Victor&apos;s life takes an unexpected turn.
              </p>
              <p>
                Despite the hardships, Victor&apos;s unwavering determination
                and the support of his family propel him forward. Alongside his
                wife Lara, father Horacio, daughter Nika, and son Vik-Vik, they
                embark on a quest to earn one million dollars within a year to
                claim a staggering billion-dollar inheritance.
              </p>
              <p>
                As the family navigates the obstacles in their path, they
                discover their hidden talents and form unexpected alliances.
                Grandpa Horacio&apos;s musical talents captivate a crowd, Nika
                finds solace in the support of a secret admirer named Mark, and
                young Vik-Vik embarks on a clever bartering project.
              </p>
              <p>
                Meanwhile, Felix, Victor&apos;s second cousin, takes a risky
                shortcut to accumulate the necessary funds, leading to a rivalry
                between the two. Their endeavors culminate in an international
                wine competition, where Victor&apos;s wine, unknowingly altered
                by Felix&apos;s sabotage, faces judgment.
              </p>
              <p>
                Amidst the twists and turns, the family finds unexpected success
                and happiness in their pursuits. They learn valuable lessons
                about love, determination, and the importance of staying true to
                oneself. In the end, the film explores the idea that wealth is
                not just about financial gain, but also about personal growth,
                relationships, and finding joy in the journey itself.
              </p>
              <p>
                &quot;Donkey Don&apos;t Die&quot; is a heartwarming and humorous
                exploration of family bonds, personal aspirations, and the
                unpredictable nature of life&apos;s challenges.
              </p>
            </Drawer>
            <Drawer opened={false} title={`Treatment:`}>
              {/* <h3 className="py-4 text-2xl font-bold">Treatment:</h3> */}
              <p>
                On the early morning of December 31st, two men in their 50s,
                dressed in affluent attire, emerge from the bustling club.
              </p>
              <p>
                Engaged in conversation, they discuss the means of attaining
                their first million dollars. The bald man asserts that it is
                nearly impossible to achieve such wealth without committing a
                sin or two along the way. However, the other man proposes a bet,
                suggesting that with the right motivation, anyone can become a
                millionaire.
              </p>
              <p>
                One of the wealthy men approaches a passerby and requests to
                borrow their phone. The stranger willingly hands over their
                phone, and the wealthy man quickly sends a message from it.
                After completing the task, he returns the phone to the stranger,
                along with a $100 bill as a gesture of gratitude. However, the
                stranger kindly declines the money, stating that it isn&apos;t
                necessary.
              </p>
              <p>
                Continuing on his path, Victor, a man in his 40s, proceeds to
                his workplace, a wine factory. However, his employment takes a
                bitter turn as he finds himself facing termination. The factory
                authorities discovered that a batch of wine had been spoiled due
                to a fermentation process that Victor had devised. Consequently,
                they decide to discard the entire batch and inform him that he
                is no longer welcome to return to the factory.
              </p>
              <p>
                Feeling remorseful, Victor notices farmer Sako standing
                disheartened near the entrance of the factory. It dawns on
                Victor that the batch of wine that was discarded had been made
                from Sako&apos;s grapes, leading him to feel even more regretful
                about the situation.
              </p>
              <p>
                At home, Victor&apos;s wife, father, daughter, and son await his
                return.
              </p>
              <p>
                Victor&apos;s wife, LARA, is a beautiful woman who works as an
                accountant in a seemingly mundane corporation. Her occupation
                may lack excitement, but she diligently fulfills her
                responsibilities to support their family.
              </p>
              <p>
                Father, HORACIO, is an ex-military musician who has since
                retired.
              </p>
              <p>
                Daughter, Nika, is going through a difficult teenage phase where
                she&apos;s unsure about what she wants from life.
              </p>
              <p>
                Victor&apos;s son, Vik-Vik, is a bright and precocious
                7-year-old boy who approaches life with a remarkably serious
                demeanor.
              </p>
              <p>
                As Victor arrives home, he shares the disheartening news of his
                termination from the wine factory with his family. His wife and
                daughter, who were in the midst of preparing for the holiday
                dinner, are immediately engulfed by disappointment and concern.
                The weight of the situation overwhelms them to the extent that
                they inadvertently forget about the meal cooking in the kitchen.
              </p>
              <p>
                Unbeknownst to them, the food left unattended in the kitchen
                ignites, causing a small fire to break out. The family&apos;s
                attention is abruptly diverted to the urgent need to extinguish
                the fire and ensure everyone&apos;s safety, leaving them
                disheartened by both Victor&apos;s job loss and the ruined meal.
              </p>
              <p>
                The doorbell rings. Victor&apos;s second cousin, Felix, and his
                wife, Bella, arrive to celebrate the new year together. Upon
                learning of the ruined dinner, they consider going to another
                relative&apos;s house instead. However, with only half an hour
                left until the new year, they decide to stay. Felix, not wanting
                his thoughtful gift to go to waste, opens the bottle of
                champagne he had brought along.
              </p>
              <p>
                Everyone&apos;s lost in their own thoughts and emotions, they
                raise their glasses of champagne together. In this bittersweet
                moment, Victor silently wishes that God should test him with big
                money. As the clock nears midnight and anticipation fills the
                air, the doorbell rings once more.
              </p>
              <p>
                As the family stands in awe at the door, strangers in elegant
                suits enter their home. The figure in charge, Barry Lewis,
                reveals unexpected news. He explains that the uncle of
                Victor&apos;s grandfather has passed away, and due to Victor
                being the sole living relative, he is set to inherit a
                staggering sum of one billion dollars. However, there&apos;s a
                catch - the will states that he must first earn one million
                dollars through honest work within a year.
              </p>
              <p>
                Suddenly, a problem arises as Felix declares that he, being
                older and sharing the same birth name as Victor, is the rightful
                inheritor according to the terms of the will.
              </p>
              <p>
                Barry Lewis, the lawyer, clarifies that the inheritance will go
                to the one who earns the one million dollars. If both Victor and
                Felix achieve this, the inheritance will be divided. Felix
                accepts the decision and leaves with his wife.
              </p>
              <p>
                With unwavering determination, the men of the family gather
                together to plan their path towards success. Meanwhile, the
                women remain skeptical, they choose to stick to their existing
                plans and responsibilities.
              </p>
              <p>
                The next day, Victor approaches Sako and proposes a partnership
                to process the remaining grapes into wine for an international
                competition.
              </p>
              <p>
                Grandpa Horacio, a talented musician, takes a step towards
                earning their fortune by starting to play the guitar in the
                park. His melodic tunes attract the attention of passersby,
                including Nika and her friends. Unfortunately, Nika becomes the
                target of cruel laughter from her friends, causing her to run
                away in tears. Coincidentally, Mark, who harbors a secret
                affection for Nika and attends the same college, witnesses the
                distressing situation. He quickly goes after her, eager to offer
                comfort and support during her moment of vulnerability.
              </p>
              <p>
                Later, Mark and his friends come up with a heartwarming plan to
                turn Grandpa Horacio&apos;s guitar performance into an
                extraordinary show. They bring along large audio monitors and DJ
                equipment, transforming the park into a vibrant stage. With the
                equipment set up, Mark joins in, contributing his own musical
                talents, creating a captivating atmosphere that captures the
                attention of onlookers.
              </p>
              <p>
                The once-quiet park now becomes alive with music and joy, as
                people gather around to witness the impromptu concert. Nika, who
                had run away earlier, returns to the scene, amazed by the
                transformation and touched by Mark&apos;s gesture of support.
              </p>
              <p>
                Nika, finding comfort in Mark&apos;s presence, joins him and
                Grandpa Horacio in a musical performance. Her sweet vocals add
                an enchanting touch to the already captivating atmosphere.
              </p>
              <p>
                As the trio&apos;s music fills the air, a passerby is captivated
                by their talent and is revealed to be a music producer.
                Impressed by their performance, he approaches them and offers
                them a record deal on the spot.
              </p>
              <p>
                Inspired by his father&apos;s quest to earn a million dollars,
                7-year-old Vik-Vik approaches Victor and requests a metal pin.
                Curious about his son&apos;s intentions, Victor provides him
                with the pin, unaware of Vik-Vik&apos;s secret project.
              </p>
              <p>
                With determination, Vik-Vik quietly embarks on his own mission
                to barter the pin for progressively more valuable items.
                Throughout the film, he intermittently reappears, each time
                holding a new item that is even more valuable than the last.
              </p>
              <p>
                Tensions rise between Victor and his wife, Lara, as she starts
                coming home late due to extra work. Victor is indignant, but
                Lara defends herself, highlighting her sacrifices for the
                family&apos;s financial goals.
              </p>
              <p>
                In an attempt to win the competition on his own terms, Felix
                makes a risky decision. He contacts a local loan shark and
                convinces him to lend him a million dollars, despite the
                exorbitant interest rates. Felix sees this as a shortcut to
                achieving his goal, as he anticipates the inheritance of a
                billion dollars. Utilizing his rental shop as a means to
                accumulate funds, Felix gradually amasses a million dollars in
                his demonstration account.
              </p>
              <p>
                Victor faces a series of challenges, including the interference
                of Felix. In Victor&apos;s and Sako&apos;s small garage factory,
                the filtration equipment unexpectedly breaks down, revealing
                Felix&apos;s deliberate sabotage. With no immediate solution
                available, they are left with no choice but to retrieve an old
                and rusty filtration bowl from the basement.
              </p>
              <p>
                After spending a considerable amount of time brainstorming,
                Victor and Sako finally come up with the perfect name for their
                wine. Excitedly, they proceed to order labels for their bottles.
                However, their enthusiasm is short-lived when they realize that
                they have overlooked a crucial step: registering the trademark
                for their wine. To their dismay, they discover that the
                trademark they had in mind has already been registered, and the
                culprit behind it is none other than Felix.
              </p>
              <p>
                In a final act of sabotage, Felix covertly adds laxatives to the
                ferment during the filtration process. Unaware of this
                treachery, Victor and Sako proceed with adding the ferment to
                the filtration system. This causes an invisible chemical
                reaction, altering the composition of the ferment.
              </p>
              <p>
                Upon receiving an anonymous message from Felix with a photo of
                Lara entering a suspicious establishment, Victor&apos;s worst
                suspicions are ignited. Determined to uncover the truth, he
                rushes to his wife&apos;s workplace and finds her leaving,
                getting into a car that leads him to a mysterious and dimly lit
                location. Victor clandestinely follows his wife and witnesses
                her entering a nightclub. Overwhelmed by a mix of emotions, he
                attempts to enter the establishment but is denied entry by the
                security as his name is not on the guest list. Undeterred,
                Victor manages to sneak in through the back door of the kitchen,
                finding himself in a smoky, dark, and enigmatic club filled with
                unfamiliar faces.
              </p>
              <p>
                As the stage opens, Victor&apos;s heart swells with love and
                admiration as he sees Lara, dressed elegantly, singing
                beautifully with a jazz band. The magic of the moment rekindles
                his deep affection for his wife, reminding him of her talent and
                the reasons he fell in love with her.
              </p>
              <p>
                However, the security soon notices Victor&apos;s unauthorized
                presence and forcefully ejects him from the club, abruptly
                ending the fleeting moment of connection. Lara rushes out of the
                club. In a tender and heartfelt conversation, they begin to
                unravel the misunderstandings and suspicions that had driven a
                wedge between them.
              </p>
              <p>
                In a fit of anger and resentment, Felix decides to sabotage the
                night club where Lara had been singing. He orchestrates a plan
                that leads to the discovery of a large group of rats in the
                kitchen, prompting the inspectors to shut down the establishment
                due to sanitary issues.
              </p>
              <p>
                Meanwhile, little Vik-Vik, with his resourcefulness, manages to
                acquire a Tesla car and using his entrepreneurial spirit, trades
                the expensive car for the bankrupted night club. The desperate
                owner sees this as a stroke of luck, as he can now salvage
                something from his lost establishment and tarnished reputation.
              </p>
              <p>
                Lara, taking ownership of the night club on behalf of Vik-Vik,
                reopens the establishment. With her determination and passion,
                the club quickly gains popularity.
              </p>
              <p>
                Victor and Sako spend their time bottling the wine to prepare it
                for the competition. In the midst of their work, they decide to
                celebrate their progress by indulging in a few bottles they have
                crafted.
              </p>
              <p>
                As the family continues to pursue their respective endeavors,
                Grandpa and Nika release their first single, which unexpectedly
                becomes a radio hit.
              </p>
              <p>
                After a delayed arrival of the chemical analysis report, Victor
                finally receives the results for their wine. To his horror, he
                discovers that the wine&apos;s chemical composition has been
                unusually altered, most likely due to Felix&apos;s sabotage.
                Victor realizes that the wine they entered into the contest may
                have unintended consequences.
              </p>
              <p>
                Victor, desperate to prevent the wine from being tasted during
                the wine contest in Paris, calls too late to stop the
                degustation process. The tasting had taken place the day before,
                leaving Victor filled with dread and apprehension about the
                potential consequences of the altered wine.
              </p>
              <p>
                As Victor and Sako anxiously wait for the verdict, Sako, filled
                with sorrow, removes his hat. To their astonishment, a luxurious
                head of hair is revealed, which surprises Victor immensely as
                Sako had always been bald.
              </p>
              <p>
                Despite having less than half of the million dollars they needed
                on the final day, the family finds happiness in their
                accomplishments. Suddenly, before their eyes, the balance in
                their account on the screen grows to one million dollars.
              </p>
              <p>
                Two wealthy men who made a bet on the million dollars are
                sitting at a coffee table. The bald man hands over a check of
                one million dollars to the other, who is surprised that the
                loser seems so happy. But the bald man removes his hat,
                revealing his newly grown hair, and explains that he has just
                earned billions.
              </p>
              <p>
                Victor receives mail from the international wine contest
                informing him that his wine has won the &quot;worst wine&quot;
                nomination. As a consolation prize, he is awarded a bottle of
                the best wine. However, underneath that mail, he finds another
                letter from a pharmaceutical company expressing interest in the
                fermentation recipe he used during the winemaking process. They
                offer him a substantial sum and propose a partnership for the
                patent of a hair regrowth product.
              </p>
              <p>
                The family, having forgotten about the inheritance, joyfully
                celebrates New Year&apos;s Eve with the new friends they made
                throughout the year. However, the loan shark and his goons
                arrive at Felix&apos;s house.
              </p>
            </Drawer>
          </article>
        </section>
        <section className="min-w-[300px] p-4 ">
          <Image
            src="/donkey/donkey.png"
            width="400"
            height="400"
            className=" "
            alt="donkey with gold"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
