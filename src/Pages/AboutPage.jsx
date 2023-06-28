import Card from "../component/Shared/Card"
import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>this is about page</h1>
            <p>this is a react app for leave a feedback</p>
            <p>version : 1.1.0</p>
            <Link to='/'>Back to Home page</Link>
        </div>
    </Card>
  )
}

export default AboutPage
