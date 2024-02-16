const removeTrailingSlash = (url: string): string => {
	return url.replace(/\/$/, "");
};

export default removeTrailingSlash;
