import { z } from 'zod';
import { limitedProcedure, router, userProcedure } from '../../trpc';
import { eq } from '@uninbox/database/orm';
import { users } from '@uninbox/database/schema';

export const emailRouter = router({
  emailVerificationCodeRequest: userProcedure
    .input(z.object({}).strict())
    .query(async ({ ctx }) => {
      const { db, user } = ctx;
      const userId = user.id;

      return {};
    }),

  emailVerificationCodeValidation: userProcedure
    .input(z.object({}).strict())
    .query(async ({ ctx }) => {
      const { db, user } = ctx;
      const userId = user.id;

      return {};
    })
});
