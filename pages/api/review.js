const review = [
    {
        id: 0,
        clientName: '',
        clientLocation: '',
        clientSource: 'Fiverr',
        clientReview: 'It is always nice to work with him. The work is finished quickly and he does more than is asked of him. It is also clear that he has a lot of knowledge of the work he does. I look forward to our next collaboration.'
    },
    {
        id: 2,
        clientName: '',
        clientLocation: '',
        clientSource: '',
        clientReview: 'He is very good with communication and experienced website developer, great experience to work with him. '
    },
    {
        id: 3,
        clientName: '',
        clientLocation: '',
        clientSource: 'Fiverr',
        clientReview: "Siva is extremely knowledgeable and helpful. He knows in and out of web app development . His understanding of different technologies and frameworks in the space is also very impressive. I hope I get the chance to work with him again"
    },
    {
        id: 4,
        clientName: '',
        clientLocation: '',
        clientSource: '',
        clientReview: 'I have worked with siva and he is very professional and excellent software  developer. I admire his speed of development and quality of work when given an assignment.'
    },
]
export default function handler(req, res) {
    res.status(200).json(review)
}
