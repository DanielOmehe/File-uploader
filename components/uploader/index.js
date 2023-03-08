import { Form, Label, File, Button } from "../form";
import Header from "./header";
import Text from "./text";

const FileUploader =()=>{
    return(
        <>
            <Form>
                <Header>Upload</Header>
                <File type='file' />
                <Label label='input-file-upload'>
                    <img src="/images/cloud.svg" alt="upload" />
                    <Header>Drag & drop files or Browse</Header>
                    <Text>Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</Text>
                </Label>
            </Form>
        </>
    )
}

export default FileUploader