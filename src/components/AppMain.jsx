export default function AppMain(){

    const imgSize = "600x400";
    const postTitle = "La Fabbrica di Cioccolato"

    return (

        <main>

            <div className="main_container">
                <div className="row post_row">
                    <div className="col-4 col_photo">
                        <div className = "postCard">
                            <div className="image">
                            <h2>{imgSize}</h2>
                            </div>
                        
                    
                    
                        <h3>{postTitle}</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ipsum quas incidunt optio, ratione excepturi laudantium sapiente minus tempore a quos fuga similique? Officiis eaque.</p>
                        </div>
                    </div>
                </div>



            </div>
        </main>


    )

}