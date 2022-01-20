import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id)

    if (user) {
      const newUser = this.usersRepository.turnAdmin(user)
      return newUser
    }
    throw new Error("User not found")


  }
}

export { TurnUserAdminUseCase };
