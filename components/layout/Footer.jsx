import styles from "./Footer.module.css"
import FooterList from "@/components/ui/FooterList"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLists}>
        <FooterList title={"Actions"} item1={"Summarist Magazine"} item2={"Cancel Subscription"} item3={"Help"} item4={"Contact Us"}/>
        <FooterList title={"Useful Links"} item1={"Pricing"} item2={"Summarist Business"} item3={"Gift Cards"} item4={"Authors & Publishers"}/>
        <FooterList title={"Company"} item1={"About"} item2={"Careers"} item3={"Partners"} item4={"Code of Conduct"}/>
        <FooterList title={"Other"} item1={"Sitemap"} item2={"Legal Notice"} item3={"Terms of Service"} item4={"Privacy Policy"}/>
      </div>
      <div className={styles.copyright}>Copyright &copy; 2026 Summarist.</div>
    </footer>
  );
}

export default Footer;
