import { css } from "@emotion/css";
import { MDBCol, MDBRow } from "mdbreact";
import CenterAligned from "../../components/CenterAligned";
import CountryPicker from "../../components/CountryPicker";
import { IoReorderThree } from "react-icons/io5";
import COLORS from "../../utils/colors";
import { useNavigate } from "react-router-dom";
import ContactForm from "../../components/ContactForm";

const ThankYouScreen = () => {
    const navigate = useNavigate();

    const handleGoServices = () => {
        navigate("/catalogue", { replace: false });
    };

    const renderServices = () => (
        <MDBRow className={css`text-align: center;`}>
            <MDBCol md="2"/>

            <MDBCol md="2" className={css`background-color: blue; border: 1px solid black; border-radius: 10vh; padding-top: 7.75%; padding-bottom: 4%;`}>
                <p className={css`font-family: 'Lexend Deca', sans-serif; font-wight: 700; font-size: 2.66rem; color: ${COLORS.WHITE_1}; text-shadow: 1px 1px ${COLORS.BLACK_1};`}>Test</p>
                <button className={css`border-width: 0.281vh; border-color: ${COLORS.WHITE_1}; color: ${COLORS.WHITE_1}; border-radius: 10vh; border-style: solid; padding: 0.66vh 1.77vh 0.66vh 1.77vh; background-color: transparent; `}>SEE MORE</button>
            </MDBCol>

            <MDBCol md="1"/>

            <MDBCol md="2" className={css`background-color: blue; border: 1px solid black; border-radius: 10vh; padding-top: 7.75%; padding-bottom: 4%;`}>
                <p className={css`font-family: 'Lexend Deca', sans-serif; font-wight: 700; font-size: 2.66rem; color: ${COLORS.WHITE_1}; text-shadow: 1px 1px ${COLORS.BLACK_1};`}>Test</p>
                <button className={css`border-width: 0.281vh; border-color: ${COLORS.WHITE_1}; color: ${COLORS.WHITE_1}; border-radius: 10vh; border-style: solid; padding: 0.66vh 1.77vh 0.66vh 1.77vh; background-color: transparent; `}>SEE MORE</button>
            </MDBCol>

            <MDBCol md="1"/>
            
            <MDBCol md="2" className={css`background-color: blue; border: 1px solid black; border-radius: 10vh; padding-top: 7.75%; padding-bottom: 4%;`}>
                <p className={css`font-family: 'Lexend Deca', sans-serif; font-wight: 700; font-size: 2.66rem; color: ${COLORS.WHITE_1}; text-shadow: 1px 1px ${COLORS.BLACK_1};`}>Test</p>
                <button className={css`border-width: 0.281vh; border-color: ${COLORS.WHITE_1}; color: ${COLORS.WHITE_1}; border-radius: 10vh; border-style: solid; padding: 0.66vh 1.77vh 0.66vh 1.77vh; background-color: transparent; `}>SEE MORE</button>
            </MDBCol>
        </MDBRow>
    );

    return (
        <MDBRow className={css`width: 100%; height: 100%; max-height: 100%; margin: 0 !important;`}>

            {/* MAIN HEADER */}
            <MDBCol md="12" className={css`height: 12vh; padding: 0 !important;`}>
                <div className={css`display: flex; justify-content: space-between; background-color: ${COLORS.WHITE_1}; width: 100%; height: 100%;`}>
                    <CenterAligned>
                        <IoReorderThree className={css`width: 7vh; height: 7vh; margin-left: 10vh;`} />
                    </CenterAligned>
                        <img src="/assets/img/Logo/header-logo.png" alt="kam logo"/>
                    <CenterAligned>
                        <CountryPicker className={css`width: 19.45vh; height: 4.25vh; padding-top: 0.1vh; padding-bottom: 0.1vh;`} />
                    </CenterAligned>
                </div>
            </MDBCol>

            {/* NAV OPTIONS */}
            <MDBCol md="12" className={css`height: 21%; padding: 0 !important; background-color: ${COLORS.BLACK_4};`}>
                <div>
                    TODO ADD MENU ELEMENTS (CHECK FONT & WEIGHT)
                </div>
            </MDBCol>

            {/* BANNER CONTACT US PHONE NUMBER */}
            <MDBCol md="12" className={css`padding: 0px !important;`}>
                <img 
                    alt="header"
                    src="/assets/img/contact-us/header.png"
                    className={css`width: 100%; object-fit: cover;`}
                />
            </MDBCol>

            {/* IMAGE BLUE DECORATION */}
            <div className={css`text-align: center;`}>
                <img
                    src="/assets/img/BlueRoundBox.png"
                    alt="decoration purple circle"
                    className={css`margin-top: 4.156vh; margin-bottom: 4.156vh;`}
                />
            </div>

            {/* THANK YOU MESSAGE */}
            <p className={css`text-align: center; font-family: 'Lexend Deca', sans-serif; font-size: 1.65rem;`}>
                Thank you!<br/>We have received your request.
            </p>

            {/* SERVICES CARDS */}
            <MDBCol md="12" className={css`padding: 30.284px 0px 3.955vh 0px;`}>
                {renderServices()}
                <p className={css`font-family: 'Lexend Deca', sans-serif; padding-top: 4.85vh; padding-bottom: 0.55vh; text-align: center; font-weight: 600; font-size: 1.715rem;`} onClick={handleGoServices}>
                    See all Categories<span className={css`margin-left: 0.552rem;`}>&gt;</span>
                </p>
            </MDBCol>
            
            {/* CONTACT US EMAIL PHONE FOOTER BANNER */}
            <MDBCol md="12" className={css`padding: 0 !important;`}>
                <img 
                    alt="header"
                    src="/assets/img/Contact us/footer.png"
                    className={css`width: 100%; object-fit: cover;`}
                />
            </MDBCol>

            {/* FOOTER */}
            <MDBCol md="12" className={css`height: 12vh; padding: 0 !important;`}>
                <div className={css`display: flex; justify-content: center; background-color: ${COLORS.WHITE_1}; width: 100%; height: 100%;`}>
                    <img src="/assets/img/Logo/header-logo.png" alt="kam service to your door footer logo"/>
                </div>
            </MDBCol>
        </MDBRow>
    );
};

export default ThankYouScreen;