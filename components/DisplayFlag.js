import { findFlagUrlByIso3Code } from "country-flags-svg";
import styled from 'styled-components';


const FlagWrapper = styled.span`
  display: inline-block;
    img {
        vertical-align: middle;
        border-radius:0.3rem;
        width: 4rem;
    }
`;

const DisplayFlag = ({ country }) => {
    const flagUrl = findFlagUrlByIso3Code(country);
    console.log(flagUrl);
    return (
        <FlagWrapper>
            <img src={flagUrl} />
        </FlagWrapper>
    )
}

export default DisplayFlag;