import classes from "/assets/styles/partials/featuredCollection.module.scss";

const FeaturedCollection = () => {
    return (
        <section className={classes.collectionContainer}>
            <div className={classes.collectionColumn}>
                <img src="https://via.placeholder.com/500x600"/>
            </div>
            <div className={classes.collectionColumn}>
                <div className={classes.content}>
                    <h3>WINTER IS HERE</h3>
                    <h2>NEW COLLECTION</h2>
                    <a className="btn" href="#">SHOP NOW</a>
                </div>
            </div>
            <div className={classes.collectionColumn}>
                <img src="https://via.placeholder.com/500x600"/>
            </div>
        </section>
    );
}

export default FeaturedCollection;