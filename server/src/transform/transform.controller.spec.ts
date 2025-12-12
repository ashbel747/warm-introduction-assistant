import { Test, TestingModule } from '@nestjs/testing';
import { TransformController } from './transform.controller';
import { TransformService } from './transform.service';
<<<<<<< HEAD

describe('TransformController', () => {
  let controller: TransformController;
=======
import { TransformIntroDto } from './dto/transform-intro.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

// Mock JwtAuthGuard so it doesn’t block tests
jest.mock('../guards/jwt-auth.guard', () => ({
  JwtAuthGuard: class {},
}));

describe('TransformController', () => {
  let controller: TransformController;
  let service: TransformService;

  const mockTransformService = {
    transformIntro: jest.fn(),
    getIntrosByFounder: jest.fn(),
    queueIntro: jest.fn(),
    updateIntroStatus: jest.fn(),
  };

  const mockReq = { user: { userId: 'founder123' } };
>>>>>>> abb365ab13b940264d920f04550b791feba24a92

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransformController],
<<<<<<< HEAD
      providers: [TransformService],
    }).compile();

    controller = module.get<TransformController>(TransformController);
=======
      providers: [
        {
          provide: TransformService,
          useValue: mockTransformService,
        },
      ],
    }).compile();

    controller = module.get<TransformController>(TransformController);
    service = module.get<TransformService>(TransformService);
  });

  afterEach(() => {
    jest.clearAllMocks();
>>>>>>> abb365ab13b940264d920f04550b791feba24a92
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
<<<<<<< HEAD
=======

  // -----------------------------
  // transformIntro
  // -----------------------------
  describe('transformIntro', () => {
    it('should call transformService.transformIntro with DTO', async () => {
      const dto: TransformIntroDto = { blurb: 'Hello', investor_preference: 'email' };
      const result = { success: true, transformed_intro: 'Transformed' };

      mockTransformService.transformIntro.mockResolvedValue(result);

      const response = await controller.transformIntro(dto);
      expect(response).toBe(result);
      expect(service.transformIntro).toHaveBeenCalledWith(dto);
    });
  });

  // -----------------------------
  // getMyIntros
  // -----------------------------
  describe('getMyIntros', () => {
    it('should call transformService.getIntrosByFounder with userId', async () => {
      const intros = [{ _id: '1' }, { _id: '2' }];
      mockTransformService.getIntrosByFounder.mockResolvedValue(intros);

      const response = await controller.getMyIntros(mockReq);
      expect(response).toBe(intros);
      expect(service.getIntrosByFounder).toHaveBeenCalledWith('founder123');
    });
  });

  // -----------------------------
  // queue
  // -----------------------------
  describe('queue', () => {
    it('should call transformService.queueIntro with provided data', async () => {
      const data = { startupId: '1', generatedIntro: 'Intro text' };
      const created = { _id: 'abc', ...data };

      mockTransformService.queueIntro.mockResolvedValue(created);

      const response = await controller.queue(data);
      expect(response).toBe(created);
      expect(service.queueIntro).toHaveBeenCalledWith(data);
    });
  });

  // -----------------------------
  // updateStatus
  // -----------------------------
  describe('updateStatus', () => {
    it('should call transformService.updateIntroStatus with id, status, and followUpDueDate', async () => {
      const body = { status: 'sent' as const, followUpDueDate: new Date() };
      const updated = { _id: '1', status: 'sent' };

      mockTransformService.updateIntroStatus.mockResolvedValue(updated);

      const response = await controller.updateStatus('1', body);
      expect(response).toBe(updated);
      expect(service.updateIntroStatus).toHaveBeenCalledWith('1', body.status, body.followUpDueDate);
    });
  });
>>>>>>> abb365ab13b940264d920f04550b791feba24a92
});
