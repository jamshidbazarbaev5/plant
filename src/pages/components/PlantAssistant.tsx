import ChatArea from "./pages/ChatArea";
import "./PlantAssistant.css";
import AboutPlant from "./pages/AboutPlant";

function PlantAssistant() {
    return (
        <div className="plant-assistant">
            <div className="content-area">
                <AboutPlant />
                <ChatArea />
            </div>
        </div>
    );
}

export default PlantAssistant;
