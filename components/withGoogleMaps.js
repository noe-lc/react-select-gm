import { useJsApiLoader } from "@react-google-maps/api";

const withGoogleMaps = (config) => (Component) => {
  const WrappedComponent = (props) => {
    const loader = useJsApiLoader(config);
    return <Component {...props} {...loader} />;
  };

  return WrappedComponent;
};

export default withGoogleMaps;
