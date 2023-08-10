
export default function loginHandler(req: { body: any } , res: any ) {
    const body = req.body

    if (!body.email) {
        // Sends a HTTP bad request error code
        return res.status(400).json({ data: 'email not found' })
    }
    
    if (!body.password) {
        // Sends a HTTP bad request error code
        return res.status(400).json({ data: 'password not found' })
    }
   
    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ data:  `${body.email} ${body.password}` })
}
    
  