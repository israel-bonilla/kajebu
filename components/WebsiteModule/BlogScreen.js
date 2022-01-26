import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BlogScreen = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontWeight: '500', margin: 20 }}>Blog</h1>
      <FontAwesomeIcon icon={faNewspaper} size="10x" color="gray" />
    </div>
  );
};

export default BlogScreen;
