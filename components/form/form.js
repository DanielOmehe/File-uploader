const Form = ({children, onsubmit})=>{
    return(
        <>
            <form className="file-upload-form" onSubmit={onsubmit}>{children}</form>
            <style jsx>{`
                .file-upload-form{
                    width: 540px;
                    height: 620px;
                    background: var(--whitebg);
                    padding: 30px 47px;
                }
            `}</style>
        </>
    )
}

export default Form