type User = {
  data: Data;
};

type Data = {
  userId: string;
  type: string;
  attributes: {
    username: string;
    preparednessRating: {
      technicalBE: number;
      technicalFE: number;
      behavioral: number;
    };
    cwAttributes: {
      codewarsUsername: string;
      cwLeaderboardPosition: number;
      totalCompleted: number;
      languageRanks: {
        java: number;
        ruby: number;
      };
    };
  };
};

export type CurrentUser = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<CurrentUser>>;
};
