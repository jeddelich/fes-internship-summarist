import { IoDocumentTextSharp } from "react-icons/io5";
import styles from "./page.module.css";
import { RiPlantFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";

function page() {
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

      <section className={styles.benefits}>
        <ul className={styles.benefitsList}>
          <li className={styles.benefit}>
            <figure className={styles.iconWrapper}>
              <IoDocumentTextSharp className={styles.icon} />
            </figure>
            <div className={styles.benefitDescription}>
              <span className={styles.bold}>Key ideas in few min</span> with
              many books to read
            </div>
          </li>
          <li className={styles.benefit}>
            <figure className={styles.iconWrapper}>
              <RiPlantFill className={styles.icon} />
            </figure>
            <div className={styles.benefitDescription}>
              <span className={styles.bold}>3 million</span> people growing with
              Summarist everyday
            </div>
          </li>
          <li className={styles.benefit}>
            <figure className={styles.iconWrapper}>
              <FaHandshake className={styles.icon} />
            </figure>
            <div className={styles.benefitDescription}>
              <span className={styles.bold}>Precise recommendations</span>{" "}
              collections curated by experts
            </div>
          </li>
        </ul>
      </section>

      <section className={styles.choosePlan}>
        <h2 className={styles.h2}>Choose the plan that fits you</h2>
        <div className={styles.planPackage}>
          <figure className={styles.selectionCircle}>
            <div className={styles.selectionDot}></div>
          </figure>
          <div className={styles.planDescription}>
            <h4 className={styles.planTitle}>Premium Plus Yearly</h4>
            <div className={styles.price}>$99.99/year</div>
            <div className={styles.trialInfo}>7-day free trial included</div>
          </div>
        </div>
        <div className={styles.separator}>
        <hr className={styles.separatorLine}/>
        <div className={styles.separatorText}>or</div>
        <hr className={styles.separatorLine}/>
        </div>
        <div className={styles.planPackage}>
          <figure className={styles.selectionCircle}>
            <div className={styles.selectionDot}></div>
          </figure>
          <div className={styles.planDescription}>
            <h4 className={styles.planTitle}>Premium Monthly</h4>
            <div className={styles.price}>$9.99/month</div>
            <div className={styles.trialInfo}>No trial included</div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerLists}>
          <ul className={styles.footerList}>
            <h3 className={styles.h3}>Actions</h3>
            <li className={styles.footerListItem}><a className={styles.footerLink}>Summarist Magazine</a></li>
            <li className={styles.footerListItem}><a className={styles.footerLink}>Cancel Subscription</a></li>
            <li className={styles.footerListItem}><a className={styles.footerLink}>Help</a></li>
            <li className={styles.footerListItem}><a className={styles.footerLink}>Contact us</a></li>
          </ul>
          <ul className={styles.footerList}>
            <h3 className={styles.h3}>Useful Links</h3>
            <li className={styles.footerListItem}><a className={styles.footerLink}>Pricing</a></li>
            <li className={styles.footerListItem}><a className={styles.footerLink}>Summarist Business</a></li>
            <li className={styles.footerListItem}><a className={styles.footerLink}>Gift Cards</a></li>
            <li className={styles.footerListItem}><a className={styles.footerLink}>Authors & Publishers</a></li>
          </ul>
          <ul className={styles.footerList}>
            <h3 className={styles.h3}>Company</h3>
            <li className={styles.footerListItem}><a className={styles.footerLink}>About</a></li>
            <li className={styles.footerListItem}><a className={styles.footerLink}>Careers</a></li>
            <li className={styles.footerListItem}><a className={styles.footerLink}>Partners</a></li>
            <li className={styles.footerListItem}><a className={styles.footerLink}>Code of Conduct</a></li>
          </ul>
          <ul className={styles.footerList}>
            <h3 className={styles.h3}>Other</h3>
            <li className={styles.footerListItem}><a className={styles.footerLink}>Sitemap</a></li>
            <li className={styles.footerListItem}><a className={styles.footerLink}>Legal Notice</a></li>
            <li className={styles.footerListItem}><a className={styles.footerLink}>Terms of Service</a></li>
            <li className={styles.footerListItem}><a className={styles.footerLink}>Privacy Policy</a></li>
          </ul>
        </div>
        <div className={styles.copyright}>Copyright &copy; 2026 Summarist.</div>
      </footer>
    </div>
  );
}

export default page;
