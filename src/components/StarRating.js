import React, {Component} from 'react';
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";


class StarRating extends Component {
    render() {

        function GetStars(rating) {
            let stars = [];
            if (rating === undefined || rating === null) {
                return stars;
            }
            let i = 0;
            for (i = 0; i < rating; i++) {
                stars.push({counter: i, type: "star"});
            }
            for (; i < 3; i++) {
                stars.push({counter: i, type: "borderStar"})
            }
            return stars;
        }

        const starList = GetStars(this.props.rating).map((star) => {
            if (star.type === "star") {
                return <span><StarIcon style={{fontSize: "16px"}} key={star}>*</StarIcon></span>;
            } else if (star.type === "borderStar") {
                return <span><StarBorderIcon style={{fontSize: "16px"}} key={star}>*</StarBorderIcon></span>;
            }
        });

        return (
            <span>
                {starList}
            </span>
        );
    }
}

//export default connect(mapStateToProps)(StarRating);
export default StarRating;