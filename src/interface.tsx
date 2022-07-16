export type User = {
	userId: string,
	type: string,
	attributes: {
		username: string,
      preparednessRating: {
        technicalBE: number,
        technicalFE: number,
        behavioral: number
      },
	}
}