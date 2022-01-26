import { faBullhorn, faDesktop, faTags, faUserFriends } from "@fortawesome/free-solid-svg-icons"
import NavModule from "./NavModule"
import NavSubmodule from "./NavSubmodule"

const SidebarNav = () => {
  return (
    <nav>
      {/* List of Modules */}
      <ul>
        <NavModule name="Website" link="/design" icon={faDesktop} >
          <NavSubmodule name="Design" link="/design" />
          <NavSubmodule name="Page Builder" link="/page-builder" />
          <NavSubmodule name="Blog" link="/blog" />
          <NavSubmodule name="Analytics" link="/analytics" />
        </NavModule>

        <NavModule name="Products" link="/all-products" icon={faTags} >
          <NavSubmodule name="All Products" link="/all-products" />
          <NavSubmodule name="Offers" link="/offers" />
        </NavModule>

        <NavModule name="Marketing" link="/pipelines" icon={faBullhorn}>
          <NavSubmodule name="Pipelines" link="/pipelines" />
          <NavSubmodule name="Email Campaigns" link="/email-campaigns" />
          <NavSubmodule name="Events" link="/events" />
          <NavSubmodule name="Forms" link="/forms" />
        </NavModule>

        <NavModule name="People" link="/all-people" icon={faUserFriends}>
          <NavSubmodule name="All People" link="/all-people" />
          {/* <NavSubmodule name="Assessments" link="/assessments" /> */}
          <NavSubmodule name="Affiliates" link="/affiliates" />
        </NavModule>
      </ul>
    </nav>
  )
}

export default SidebarNav
