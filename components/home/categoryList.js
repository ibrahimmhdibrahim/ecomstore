import classes from "/assets/styles/partials/categoryList.module.scss"

const CategoryList = () => {
    return (
        <div className={classes.categoryContainer + " container"}>
            <div className={classes.categoryColumn}>
                <div className={classes.categoryBlock}>
                    <h3>Category Title</h3>
                    <img src="https://via.placeholder.com/400x400"/>
                </div>
            </div>
            <div className={classes.categoryColumn}>
                <div className={classes.categoryBlock}>
                    <h3>Category Title</h3>
                    <img src="https://via.placeholder.com/400x400"/>
                </div>
            </div>
            <div className={classes.categoryColumn}>
                <div className={classes.categoryBlock}>
                    <h3>Category Title</h3>
                    <img src="https://via.placeholder.com/400x400"/>
                </div>
            </div>
            <div className={classes.categoryColumn}>
                <div className={classes.categoryBlock}>
                    <h3>Category Title</h3>
                    <img src="https://via.placeholder.com/400x400"/>
                </div>
            </div>
        </div>
    );
}

export default CategoryList;