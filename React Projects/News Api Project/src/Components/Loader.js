import loadergif from "../defaultimages/loader.gif"

export default function Loader() {

    return (
        <div className="text-center">
            <img src={loadergif} alt="LoadingSpinner" />
        </div>
    )

}