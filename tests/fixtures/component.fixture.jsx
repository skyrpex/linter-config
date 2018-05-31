export default {
    data: () => ({
        name: "world",
        cssClasses: "heading--dark",
    }),
    render() {
        return <div css={this.cssClasses}>Hello {this.name}</div>;
    },
};
