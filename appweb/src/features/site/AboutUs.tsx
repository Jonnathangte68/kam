import { css } from "@emotion/css";
import { MDBCol, MDBRow } from "mdbreact";
import CenterAligned from "../../components/CenterAligned";
import CountryPicker from "../../components/CountryPicker";
import { IoReorderThree } from "react-icons/io5";
import COLORS from "../../utils/colors";
import RegularTextInput from "../../components/TextInput/RegularTextInput";
import NavigationBar from "../../components/NavigationBar";
import { useState } from "react";
import ChatDialog from "../../components/ChatDialog";

const AboutUsScreen = () => {
    const [isChatDialogVisible, setIsChatDialogVisible] = useState(false);
    
    const handleToggleLiveChat = () => {
        setIsChatDialogVisible(!isChatDialogVisible);
    };
    
    const handleFormSubmit = () => {
        // Send request save feedback
    };

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
                        <CountryPicker className={css`border-color: black; width: 19.45vh; height: 4.25vh; padding-top: 0.1vh; padding-bottom: 0.1vh; margin-left: -7.655vh; -webkit-box-shadow: 5px 5px 15px -9px #000000; box-shadow: 5px 5px 15px -9px #000000;`} />
                    </CenterAligned>
                </div>
            </MDBCol>

            {/* NAV OPTIONS */}
            <NavigationBar />

            {/* BANNER CONTACT US PHONE NUMBER */}
            <MDBCol md="12" className={css`padding: 0px !important;`}>
                <img 
                    alt="header"
                    src="/assets/img/contact-us/header.png"
                    className={css`width: 100%; object-fit: cover;`}
                />
            </MDBCol>

            {/* OUR STORY BANNER */}
            <MDBCol md="12" className={css`padding: 0 !important;`}>
                <img className={css`width: 100%;`} alt="tell our story kam" src="/assets/img/our-story-big-slogan.png" />
                <div className={css`position: relative; margin-top: -50.51vh; margin-bottom: 25vh; left: 20%; right: 20%; width: 60%; background-color: transparent;`}>
                    <RegularTextInput
                        name="ogabsdggnosdio2"
                        title=""
                        placeholder="Name"
                        // value={instructor1}
                        // onChange={(value => setInstructor1(value))}
                    />
                    <br/>  
                    <RegularTextInput
                        name="fabhsdo2"
                        title=""
                        placeholder="Feedback"
                        isTextAreaField={true}
                        // value={instructor1}
                        // onChange={(value => setInstructor1(value))}
                    />
                    <br/>  
                    <button
                        className={css`font-family: 'Lexend Deca', sans-serif; width: 100%; height: 5vh; background-color: ${COLORS.PURPLE}; border: 1px solid ${COLORS.PURPLE}; border-radius: 4px; color: ${COLORS.WHITE_1}`}
                        onClick={handleFormSubmit}
                    >
                        Send Request
                    </button>
                </div>
            </MDBCol>
            
            {/* CONTACT US EMAIL PHONE FOOTER BANNER */}
            <MDBCol md="12" className={css`padding: 0 !important;`}>
                <img 
                    alt="header"
                    src="/assets/img/Contact us/footer.png"
                    className={css`width: 100%; object-fit: cover;`}
                />
            </MDBCol>

            {/* OPEN LIVE CHAT */}
            <img
                className={css`width: 19vh; height: 9vh; position: fixed; top: 69%; right: 2vh;`}
                alt="open live chat dialog"
                src="/assets/img/live-chat.png"
                onClick={handleToggleLiveChat}
            />
            <ChatDialog visible={isChatDialogVisible} onClose={() => setIsChatDialogVisible(false)} />

            {/* FOOTER */}
            <MDBCol md="12" className={css`height: 12vh; padding: 0 !important;`}>
                <div className={css`display: flex; justify-content: center; background-color: ${COLORS.WHITE_1}; width: 100%; height: 100%;`}>
                    <img src="/assets/img/Logo/header-logo.png" alt="kam service to your door footer logo"/>
                </div>
            </MDBCol>
        </MDBRow>
    );
};

export default AboutUsScreen;