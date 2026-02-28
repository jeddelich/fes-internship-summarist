"use client";

import { IoDocumentTextSharp } from "react-icons/io5";
import styles from "./page.module.css";
import { RiPlantFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import Footer from "@/components/layout/Footer";
import Btn from "@/components/ui/Btn";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import Plan from "@/components/ui/Plan";
import Benefit from "@/components/ui/Benefit";

function page() {
  const [questionOpen, setQuestionOpen] = useState<number | null>(1);
  const [planSelect, setPlanSelect] = useState<number>(1);

  function purchase() {
    console.log("purchase");
  }

  function toggleQuestion(index: number) {
    setQuestionOpen(questionOpen === index ? null : index);
  }

  function togglePlanSelect(index: number) {
    if (!(planSelect === index)) {
      setPlanSelect(index);
    }
  }

  return (
    <div className={styles.page}>
      <section className={styles.landing}>
        <h1 className={styles.h1}>
          Get unlimited access to many amazing books to read
        </h1>
        <h3 className={styles.h4}>
          Turn ordinary moments into amazing learning opportunities
        </h3>
        <figure className={styles.imgWrapper}>
          <img
            src="/images/pricing-welcome.svg"
            className={styles.img}
            alt=""
          />
        </figure>
      </section>

      <div className={styles.stickyTrack}>
        <section className={styles.benefits}>
          <ul className={styles.benefitsList}>
            <Benefit
              icon={<IoDocumentTextSharp className={styles.icon} />}
              boldText="Key ideas in few min"
              normalText=" with
                many books to read"
            />
            <Benefit
              icon={<RiPlantFill className={styles.icon} />}
              boldText="3 million"
              normalText=" people growing with Summarist everyday"
            />
            <Benefit
              icon={<FaHandshake className={styles.icon} />}
              boldText="Precise recommendations"
              normalText=" collections curated by experts"
            />
          </ul>
        </section>

        <section className={styles.choosePlan}>
          <h2 className={styles.h2}>Choose the plan that fits you</h2>
          <Plan
            title={"Premium Plus Yearly"}
            price={"$99.99/year"}
            trialInfo={"7-day free trial included"}
            togglePlanSelect={togglePlanSelect}
            planSelect={planSelect}
            index={1}
          />
          <div className={styles.separator}>
            <hr className={styles.separatorLine} />
            <div className={styles.separatorText}>or</div>
            <hr className={styles.separatorLine} />
          </div>
          <Plan
            title={"Premium Monthly"}
            price={"$9.99/month"}
            trialInfo={"No trial included"}
            togglePlanSelect={togglePlanSelect}
            planSelect={planSelect}
            index={2}
          />
        </section>
        <div className={styles.getStarted}>
          <Btn
            text="Start your free 7-day trial"
            color="bg-[#2bd97c]! text-[#032b41]! active:bg-[#20ba68]! hover:scale-102"
            style={{ width: "280px" }}
            wrapper="flex justify-center"
            onClick={purchase}
          />
          <div className={styles.smallPrint}>
            Cancel your trial at any time before it ends, and you won’t be
            charged.
          </div>
        </div>
      </div>

      <section className={styles.FAQ}>
        <ul className={styles.questionsList}>
          <li className={styles.questionsSection}>
            <button
              className={styles.clickableArea}
              onClick={() => toggleQuestion(1)}
            >
              <h5 className={styles.question}>
                How does the free 7-day trial work?
              </h5>
              <figure className={styles.arrowWrapper}>
                <BsChevronDown
                  className={
                    questionOpen === 1
                      ? `${styles.arrow} + ${styles.arrowUp}`
                      : styles.arrow
                  }
                />
              </figure>
            </button>
            <div
              className={
                questionOpen === 1
                  ? `${styles.answer} + ${styles.answerVisible}`
                  : styles.answer
              }
            >
              Begin your complimentary 7-day trial with a Summarist annual
              membership. You are under no obligation to continue your
              subscription, and you will only be billed when the trial period
              expires. With Premium access, you can learn at your own pace and
              as frequently as you desire, and you may terminate your
              subscription prior to the conclusion of the 7-day free trial.
            </div>
            <hr className={styles.questionSeparator} />
          </li>
          <li className={styles.questionsSection}>
            <button
              className={styles.clickableArea}
              onClick={() => toggleQuestion(2)}
            >
              <h5 className={styles.question}>
                Can I switch subscriptions from monthly to yearly, or yearly to
                monthly?
              </h5>
              <figure className={styles.arrowWrapper}>
                <BsChevronDown
                  className={
                    questionOpen === 2
                      ? `${styles.arrow} + ${styles.arrowUp}`
                      : styles.arrow
                  }
                />
              </figure>
            </button>
            <div
              className={
                questionOpen === 2
                  ? `${styles.answer} + ${styles.answerVisible}`
                  : styles.answer
              }
            >
              While an annual plan is active, it is not feasible to switch to a
              monthly plan. However, once the current month ends, transitioning
              from a monthly plan to an annual plan is an option.
            </div>
            <hr className={styles.questionSeparator} />
          </li>
          <li className={styles.questionsSection}>
            <button
              className={styles.clickableArea}
              onClick={() => toggleQuestion(3)}
            >
              <h5 className={styles.question}>
                What's included in the Premium plan?
              </h5>
              <figure className={styles.arrowWrapper}>
                <BsChevronDown
                  className={
                    questionOpen === 3
                      ? `${styles.arrow} + ${styles.arrowUp}`
                      : styles.arrow
                  }
                />
              </figure>
            </button>
            <div
              className={
                questionOpen === 3
                  ? `${styles.answer} + ${styles.answerVisible}`
                  : styles.answer
              }
            >
              Premium membership provides you with the ultimate Summarist
              experience, including unrestricted entry to many best-selling
              books high-quality audio, the ability to download titles for
              offline reading, and the option to send your reads to your Kindle.
            </div>
            <hr className={styles.questionSeparator} />
          </li>
          <li className={styles.questionsSection}>
            <button
              className={styles.clickableArea}
              onClick={() => toggleQuestion(4)}
            >
              <h5 className={styles.question}>
                Can I cancel during my trial or subscription?
              </h5>
              <figure className={styles.arrowWrapper}>
                <BsChevronDown
                  className={
                    questionOpen === 4
                      ? `${styles.arrow} + ${styles.arrowUp}`
                      : styles.arrow
                  }
                />
              </figure>
            </button>
            <div
              className={
                questionOpen === 4
                  ? `${styles.answer} + ${styles.answerVisible}`
                  : styles.answer
              }
            >
              You will not be charged if you cancel your trial before its
              conclusion. While you will not have complete access to the entire
              Summarist library, you can still expand your knowledge with one
              curated book per day.
            </div>
            <hr className={styles.questionSeparator} />
          </li>
        </ul>
      </section>

      <Footer />
    </div>
  );
}

export default page;
