//accountInfo
//charInfo
//playerInfo

type AccountInfo = {
  id: number | string;
  name: string;
  email?: string; // email: string | undefined
}

const account: AccountInfo = {
  id: 123,
  name: 'Edio'
}

type CharInfo = {
  nickname: string;
  level: number;
}

const char: CharInfo = {
  nickname: 'Edio',
  level: 100
}

//intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  name: 'Edio',
  nickname: 'Edio',
  id: '123',
  level: 100,
}

