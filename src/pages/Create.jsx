import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BackIcon } from "../assets/back.svg";
import { ReactComponent as Img } from "../assets/img.svg";

const Create = () => {
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [imagePreviewSrc, setImagePreviewSrc] = useState("");
  const [hostName, setHostName] = useState("");
  const [eventName, setEventName] = useState();
  const [startDate, setStartDate] = useState(Date.now());
  const [endDate, setEndDate] = useState(Date.now());
  const [location, setLocation] = useState("");
  const [image, setImage] = useState();
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const showImagePreview = (e) => {
    let selectedFile = e.target.files.item(0);
    if (selectedFile) {
      setImage(selectedFile);
      if (["image/jpeg", "image/png", "image/svg+xml"].includes(selectedFile.type)) {
        let fileReader = new FileReader();
        fileReader.readAsDataURL(selectedFile);
        fileReader.addEventListener("load", (event) => {
          setImagePreviewSrc(event.target.result);
          setIsImageSelected(true);
        });
      }
    } else {
      setIsImageSelected(false);
    }
  };

  const sendToEvent = () => {
    const eventDetails = {
      eventName,
      hostName,
      location,
      startDate,
      endDate,
      image,
    };

    navigate('/event')
  };

  return (
    <div className="md:h-screen w-screen lg:w-full bg-[#fff] px-5 md:px-20">
      <div className="md:grid grid-cols-2 grid-rows-1 gap-6 h-[90%]">
        <div className="relative flex flex-col justify-center">
          <div className="flex mb-5 cursor-pointer md:mb-0 md:absolute -left-7 top-5" onClick={goToHome}>
            <button className="flex w-7 md:h-14 md:w-14">
              <BackIcon className="w-16 text-white md:h-full" />
            </button>
            <span className="mt-1 md:text-4xl"> Cancel</span>
          </div>
          <h1>Create Your Event</h1>
          <form onSubmit={sendToEvent} className="flex flex-col space-y-11">
            <div className="relative flex flex-col justify-between my-5 ">
              <label htmlFor="event" className="mx-5 my-auto text-xl font-semibold">
                🎉 Event Name:
              </label>
              <input
                type="text"
                name="event"
                id="event"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className="w-full text-gray-700 bg-gray-200 border-0 rounded-full neumorphism-shadow md:p-3 form-input border-b-gray-400 border-x-0 placeholder:text-gray-400"
              />
            </div>
            <div className="relative flex flex-col justify-between my-5 ">
              <label htmlFor="event" className="mx-5 my-auto text-xl font-semibold">
                Host Name:
              </label>
              <input
                type="text"
                name="event"
                id="event"
                value={hostName}
                onChange={(e) => setHostName(e.target.value)}
                className="w-full text-gray-700 bg-gray-200 border-0 rounded-full neumorphism-shadow md:p-3 form-input border-b-gray-400 border-x-0 placeholder:text-gray-400"
              />
            </div>
            <div className="relative flex flex-col justify-between my-5 ">
              <label htmlFor="event" className="mx-5 my-auto text-xl font-semibold">
                📅 Start Date/Time:
              </label>
              <input
                type="datetime-local"
                name="event"
                id="event"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full text-gray-700 bg-gray-200 border-0 rounded-full neumorphism-shadow md:p-3 form-input border-b-gray-400 border-x-0 placeholder:text-gray-400"
              />
            </div>
            <div className="relative flex flex-col justify-between my-5 ">
              <label htmlFor="event" className="mx-5 my-auto text-xl font-semibold">
                🏁 End Date/Time
              </label>
              <input
                type="datetime-local"
                name="event"
                id="event"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full text-gray-700 bg-gray-200 border-0 rounded-full neumorphism-shadow md:p-3 form-input border-b-gray-400 border-x-0 placeholder:text-gray-400"
              />
            </div>
            <div className="relative flex flex-col justify-between my-5 ">
              <label htmlFor="event" className="mx-5 my-auto text-xl font-semibold">
                📍 Location:
              </label>
              <input
                type="text"
                name="event"
                id="event"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full text-gray-700 bg-gray-200 border-0 rounded-full neumorphism-shadow md:p-3 form-input border-b-gray-400 border-x-0 placeholder:text-gray-400"
              />
            </div>
            <div className="relative flex my-5 ">
              <label htmlFor="event" className="mx-5 my-auto text-lg font-semibold md:text-xl">
                📸 Add an Image:
              </label>
              <input type="file" className="w-1/2 md:w-fit" name="event" onChange={showImagePreview} id="event" />
            </div>
          </form>
        </div>
        <div className="flex justify-center h-full md:p-20">
          {!isImageSelected ? (
            <div className="flex flex-col w-full">
              <span className="text-center h-[10%] font-semibold text-4xl">Select an Image to preview:</span>
              <div className="flex opacity-25 h-[80%] w-[100%]">
                <Img className="mx-auto" />
              </div>
            </div>
          ) : (
            <img src={imagePreviewSrc} className="object-contain p-5" alt="..." />
          )}
        </div>
      </div>
      <div className="h-[10%] flex justify-center p-4">
        <button type="submit" className="w-2/6 p-4 text-xl font-bold text-center text-white rounded-md bg-gradient-to-r from-primary3 to-primary4">
          🎉Create my event
        </button>
      </div>
    </div>
  );
};

export default Create;
