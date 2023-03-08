import Text from "../uploader/text"

const Label =({children, label})=>{
    return(
        <>
            <label htmlFor={label} className="upload-input-label">
                {children}
            </label>
            <style jsx>{`
                .upload-input-label{
                    width: 445px;
                    height: 427px;
                    background: var(--background);
                    border: 1px dashed rgba(56, 78, 183, 0.3);
                }
            `}</style>
        </>
    )
}

export default Label