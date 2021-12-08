import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styled from 'styled-components';

const Fallback = () => {
  return (
    <FallbackBox>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={2000}
      />
    </FallbackBox>
  );
};

const FallbackBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  translate: transform(-50%, -50%);
`;

export default Fallback;
