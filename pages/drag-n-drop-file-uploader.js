import { useState } from "react"

function DragDropFile(){

    const [dragActive, setDragActive] = useState(false);

    const handleDrag = function(e){
        e.preventDefault();
        e.stopPropagation();

        if(e.type === 'dragenter' || e.type === 'dragover'){
            setDragActive(true);
        }else if (e.type === 'dragleave'){
            setDragActive(false)
        }
    };

    const handleDrop = function(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          // at least one file has been dropped so do something
          // handleFiles(e.dataTransfer.files);
        }
    };

    const handleChange =(e)=>{
        e.preventDefault();
        if(e.target.files && e.target.files[0]) console.log(e.target.files)
    }
    return(
        <>
            <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={e => e.preventDefault()}>
                <input type='file' id="input-file-upload" multiple onChange={handleChange} />
                <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? 'drag-active' : ""}>
                    <div>
                        <p>Drag and drop file here or</p>
                        <button className="upload-button">Upload a file</button>
                    </div>
                </label>
                { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
            </form>
            <style jsx>{`
                #form-file-upload{
                    height: 16rem;
                    width: 28rem;
                    max-width: 100%;
                    text-align: center;
                    position: relative;
                }

                #input-file-upload{
                    display: none
                }

                #label-file-upload{
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 2px dashed #cbd5e1;
                    border-radius: 1rem;
                    background: #f8fafc;
                }

                #label-file-upload.drag-active{
                    background: #ffffff;
                }
                #drag-file-element {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: 1rem;
                    top: 0px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                  }

                .upload-button{
                    cursor: pointer;
                    padding: .25rem;
                    font-size: 1rem;
                    border: none;
                    background: transparent;
                    font-family: 'Oswald', sans-serif;
                }

                .upload-button:hover{
                    text-decoration: underline;
                }
            `}</style>
        </>
    )
}

export default DragDropFile