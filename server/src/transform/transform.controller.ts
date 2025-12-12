import { Controller, Post, Body, Param, Patch, UseGuards, Get, Req, } from '@nestjs/common';
import { TransformService } from './transform.service';
import { TransformIntroDto } from './dto/transform-intro.dto';
<<<<<<< HEAD
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
=======
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
>>>>>>> abb365ab13b940264d920f04550b791feba24a92

@Controller('intros')
@UseGuards(JwtAuthGuard)
export class TransformController {
  constructor(private readonly transformService: TransformService) {}

  @Post('transform')
  async transformIntro(@Body() dto: TransformIntroDto) {
    return this.transformService.transformIntro(dto);
  }

  @Get('my-queue') 
  async getMyIntros(@Req() req: any) {
    const founderId = req.user.userId; 
    return this.transformService.getIntrosByFounder(founderId);
  }

  @Post('queue')
  async queue(@Body() data: any) {
    return this.transformService.queueIntro(data);
  }

  @Patch(':id/status')
  async updateStatus(
    @Param('id') id: string,
    @Body() body: { status: 'queued' | 'sent' | 'completed'; followUpDueDate?: Date }
  ) {
    return this.transformService.updateIntroStatus(id, body.status, body.followUpDueDate);
  }
}
