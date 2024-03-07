import { Users } from '@prisma/client'
import { AuthService } from 'src/services/auth.service'
import { Controller, Post, Body, Get } from '@nestjs/common'

interface tokenData {
  token: string
}

@Controller('auth')
export class AuthController {
  constructor(private readonly appService: AuthService) {}

  @Post('/register')
  register(@Body() data: Users) {
    return this.appService.userRegister(data)
  }

  @Post('/login')
  login(@Body() data: Users) {
    return this.appService.userLogin(data)
  }

  @Get('/load/profile')
  loadProfile(@Body() data: tokenData) {
    return this.appService.loadUserByToken(data.token)
  }

  @Get('/load/profiles')
  loadProfiles() {
    return this.appService.loadAllUsers()
  }
}
