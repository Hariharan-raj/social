import DefaultLayout from "../components/Default_layout";
import notFound from '../assets/filenotfound.gif';
function NotFound() {
    return (
        <DefaultLayout>
            <div className="not_found_section">
            <a href="/login" className="back-button">
                <div class="material-symbols-outlined">arrow_back</div>
                <div className="sign-out">Back to main screen</div>
            </a>
                <div className="no_txt">
                    <div className="big">FILE</div>
                    <div className="small">NOT</div>
                    <div className="big">FOUND</div>
                    <div className="later">Check back in later!</div>
                </div>
                <img src={notFound} alt="File Not Found" height="310"/>
            </div>

            
        </DefaultLayout>
    );
}
export default NotFound;