import { Link, NavLink } from "react-router-dom"
export default function Tags() {

    return (
        <div className="bg-white px-4 py-3">
            <span>Tags</span>
            <div className="flex flex-wrap gap-3 text-xs font-light py-3">
                <Link className="border border-black px-2" to='/beauti'>Beauti</Link>
                <Link className="border border-black px-2" to='/beauti'>Sports</Link>
                <Link className="border border-black px-2" to='/beauti'>Business</Link>
                <Link className="border border-black px-2" to='/beauti'>Politics</Link>
                <Link className="border border-black px-2" to='/beauti'>Computer</Link>
                <Link className="border border-black px-2" to='/beauti'>Coding</Link>
                <Link className="border border-black px-2" to='/beauti'>Web Design</Link>
            </div>
        </div>
    )
}