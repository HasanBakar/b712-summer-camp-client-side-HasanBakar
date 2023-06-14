import { Slide, Rotate, Roll } from "react-awesome-reveal";

const Faq = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracki text-center uppercase">
          How it works
        </p>
        <h2 className="mb-12 text-2xl font-bold leadi text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              what is vision of the
              <span className="font-bold text-pink-500"> DanceScape </span>
              school?
            </summary>
            <div className="px-4 pb-4">
              <ol>
                <Slide>
                  <li>
                    1. The vision of our DanceScape school is to create an
                    inclusive and dynamic community that celebrates the art of
                    dance, fostering a passion for movement and self-expression
                    among participants of all ages and backgrounds.
                  </li>
                </Slide>
                <Rotate>
                  <li>
                    2. We aim to provide a nurturing and supportive environment
                    where dancers can explore their creativity, develop their
                    technical skills, and embrace the joy of dance, all while
                    building lasting connections with fellow dancers.
                  </li>
                </Rotate>
                <Roll>
                  <li>
                    3. Through our diverse range of classes, workshops, and
                    performances, we strive to inspire and empower dancers to
                    reach their full potential, instilling in them a deep
                    appreciation for the beauty and transformative power of
                    dance.
                  </li>
                </Roll>
              </ol>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What are the teaching periods in our school as a summer vacation
              school?
            </summary>
            <div className="px-4 pb-4">
              <ol>
                <Slide>
                  <li>
                    1. Our DanceScape school as a summer vacation school offers
                    multiple teaching periods, starting with Session 1 at the
                    beginning of summer, followed by Session 2 after a short
                    break, providing two to three weeks of focused dance
                    instruction, workshops, and rehearsals.
                  </li>
                </Slide>
                <Rotate>
                  <li>
                    2. Additionally, we offer an intensive workshop, lasting for
                    a week or two, where students can delve deeper into a
                    specific dance style with expert instructors. Finally, we
                    conclude the summer program with a performance camp,
                    allowing students to showcase their progress and talents in
                    a final showcase or performance.
                  </li>
                </Rotate>
                <Roll>
                  <li>
                    3. With these carefully structured teaching periods, our
                    summer vacation school provides a comprehensive and
                    enriching dance education experience, ensuring that students
                    of different ages and skill levels can make the most of
                    their summer break and nurture their love for dance.
                  </li>
                </Roll>
              </ol>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What is our goal of
              <span className="font-bold text-pink-500"> DanceScape</span> as a
              summer vacation school?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <ol>
                <Slide>
                  <li>
                    1. The goal of danceScape as a summer vacation school is to
                    inspire a love for dance, fostering a passion for movement
                    and artistic expression.
                  </li>
                </Slide>
                <Rotate>
                  <li>
                    2. We aim to help students develop their dance skills
                    through comprehensive training in various styles, building a
                    strong foundation while encouraging their individuality and
                    creativity.
                  </li>
                </Rotate>
                <Roll>
                  <li>
                    3. Our ultimate goal is to boost students&apos;
                    self-confidence and personal growth, providing a supportive
                    and inclusive environment where they can thrive and express
                    themselves authentically through dance.
                  </li>
                </Roll>
              </ol>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Faq;
