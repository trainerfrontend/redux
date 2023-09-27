import PropTypes from 'prop-types';

const Logo = ({ brandName, subheading }) => {
    return <>
        <h1 className="text-3xl font-bold underline">{brandName}</h1>
        <p>{subheading}</p>
    </>
}

Logo.propTypes = {
    brandName: PropTypes.string.isRequired,
    subheading: PropTypes.string
}

Logo.defaultProps = {
    brandName: "Logo"

}

export default Logo;