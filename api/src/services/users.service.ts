import { Users } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { HttpStatus, Injectable, HttpException, BadRequestException } from '@nestjs/common'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUserById(id: number): Promise<Users> {
    return this.prisma.users.findUnique({
      where: {
        id,
      },
    })
  }

  async getAllUsers(): Promise<Users[]> {
    return this.prisma.users.findMany()
  }

  async updateUser(id: number, data: Users) {
    const user = await this.getUserById(id)

    if (!user) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND)
    }

    try {
      await this.prisma.users.update({
        where: {
          id,
        },
        data,
      })
      return 'Usuario actualizado correctamente'
    } catch (error) {
      throw new BadRequestException('Error al actualizar el usuario')
    }
  }

  async deleteUser(id: number) {
    const user = await this.getUserById(id)

    if (!user) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND)
    }

    try {
      await this.prisma.users.delete({
        where: {
          id,
        },
      })

      return 'Usuario eliminado correctamente'
    } catch (error) {
      throw new BadRequestException('Error al borrar al usuario')
    }
  }
}
