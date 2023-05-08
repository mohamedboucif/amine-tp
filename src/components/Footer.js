

const Footer =()=>{
    return (
        <footer className="Footer">
            <div className="Form-footer">
                <form>
                    <textarea cols={20} rows={3} type="texte" placeholder="Ici votre message">

                    </textarea>

                    <button type="submit">
                        Valider
                    </button>
                </form>

            </div>
            <div className="text">
                <p>
                    Merci pour votre viste !
                </p>
            </div>  

        </footer>
    )
}

export default Footer;