export const GifItem = ({title,url}) => {


  return (
    //Retornamos div con la imagen
    <div className="card">
      <img src={url} alt={title} />
      
    </div>

   
    
  )
}
