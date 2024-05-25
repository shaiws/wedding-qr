import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';
import backgroundImage from './wallpapers/1.jpeg';
import cameraImage from './wallpapers/camera.png';

const MainTitleContainer = styled.div`
  position: relative;
  direction: ltr; // Set the direction to LTR for the 'Love' text
  left: 
  text-align: center;
  margin: 0;
  padding: 0;
`;

const ShareThe = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Calibri', sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Love1 = styled.div`
  position: absolute;
  top: -20px;
  left: -20px; // Adjust this value to position the 'Love' text correctly
  font-family: 'EngTitle', sans-serif;
  font-size: 100px;
  color: #333;
`;
const Love2 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px; // Adjust this value to position the 'Love' text correctly
  font-family: 'EngTitle', sans-serif;
  font-size: 80px;
  color: #333;
`;

const SubTitle = styled.h2`
  color: #333;
  font-family: 'Title', sans-serif;
  text-align: center;
  margin: 0;
  font-size: 28px;
`;

const SubSubTitle = styled.h3`
  color: #333;
  font-family: 'SubTitle', sans-serif;
  text-align: center;
  margin: 0;
  font-size: 36px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-color: #f7f7f7;
  direction: rtl;  // Set the page direction to RTL
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 90%;
  width: 300px;
`;

const Input = styled.input`
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  background-color: #72705a;
  color: white;
  cursor: pointer;
  width: 50%;

  &:hover {
    background-color: #5e5c4d;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const FooterNote = styled.div`
  background-color: #e8e8e8;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  border-radius: 8px;
  width: 100%;
  font-family: 'Avigul', sans-serif;
  margin: 10px 0;
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  border-radius: 8px;
  width: 100%;
  font-family: 'Calibri', sans-serif;
  margin: 10px 0;
`;

const Upload = () => {
  const [files, setFiles] = useState([]); // Now storing an array of files
  const [isLoading, setIsLoading] = useState(false); // State to track loading status
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const handleFileChange = (e) => {
    setFiles(e.target.files); // Store the FileList object as an array
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true before the upload starts
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]); // Append each file under the same name 'files'
    }

    axios.post('https://image-gallery-backend-zxcswoqr5a-uc.a.run.app/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(() => {
      setSuccessMessage('העלאה הצליחה! תודה ששיתפתם את הרגעים שלכם איתנו.');
      setFiles([]); // Reset the files state
      e.target.reset(); // Reset the form
    })
    .catch(err => {
      console.error(err);
    })
    .finally(() => {
      setIsLoading(false); // Set loading to false after the upload finishes
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <SubTitle>Ofir and Harel</SubTitle>
        {/* <MainTitleContainer>
          <ShareThe>
            <div>SHARE</div>
            <div>THE</div>
          </ShareThe>
          <Love1>l</Love1>
          <Love2>ove</Love2>
        </MainTitleContainer> */}
        <img src={cameraImage} alt="Camera" width={"60%"} />
        <FooterNote>
          שתפו עימנו את התמונות והסרטונים אשר צילמתם ❤️
        </FooterNote>
        <Input type="file" multiple accept="image/*,video/*" onChange={handleFileChange} />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'מעלה, נא להמתין' : 'העלאה'}
        </Button>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      </Form>
    </Container>
  );
};

export default Upload;