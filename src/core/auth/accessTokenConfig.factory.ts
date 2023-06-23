import environments from '@core/environments';
import { Injectable } from '@nestjs/common';
import { JwtSignOptions, JwtVerifyOptions } from '@nestjs/jwt';

export class AccessTokenConfigFactory {
  static instance: AccessTokenConfigFactory;
  signOptions: JwtSignOptions;
  verifyOptions: JwtVerifyOptions;
  private constructor() {
    this.signOptions = {
      secret: environments.JWT_ACCESS_TOKEN_SECRET,
      expiresIn: environments.JWT_ACCESS_TOKEN_EXPIRES_IN,
      algorithm: 'HS256',
    };
    this.verifyOptions = {
      algorithms: ['HS256'],
      secret: environments.JWT_ACCESS_TOKEN_SECRET,
    };
  }

  static getInstance() {
    return AccessTokenConfigFactory.instance
      ? AccessTokenConfigFactory.instance
      : new AccessTokenConfigFactory();
  }
}
