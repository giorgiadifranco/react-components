export default function AppHeader(){

    //logica

    const blogTitle = "My Daily Blog"
    const blogSubTitle = "Welcome to my disorder life"

    return(
        <header>

            <div className="header_container">
                <h1>{blogTitle}</h1>
                <h3>{blogSubTitle}</h3>

            </div>

        </header>


    )
}