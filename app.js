/**
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import express from 'express'
import serveStatic from 'serve-static'
import { stringReplace } from 'string-replace-middleware'
import jwt from 'jsonwebtoken'

const port = process.env.PORT || 3000;
const host = process.env.CCAAS_HOST;
const secret = process.env.COMPANY_SECRET;
const companyId = process.env.COMPANY_ID;

if (!companyId) {
  console.error('Please config `.env` file and specify the COMPANY_ID.')
  process.exit(1)
}

if (!host) {
  console.error('Please config `.env` file and specify the CCaaS host CCAAS_HOST.')
  process.exit(1)
}

if (!secret) {
  console.error('Please config `.env` file and specify the COMPANY_SECRET.')
  process.exit(1)
}

const app = express();

app.use(stringReplace({
  '$COMPANY_ID': companyId,
  '$CCAAS_HOST': host
}));
app.use(serveStatic('demos'));
app.use(express.json());

app.post('/auth/token', function (req, res) {
  const payload = req.body.payload;
  payload['iss'] = host;
  const iat = parseInt(Date.now() / 1000, 10) - 5;
  payload['iat'] = iat;
  payload['exp'] = iat + 600;
  const token = jwt.sign(payload, secret, { algorithm: 'HS256' });
  res.json({ token });
});

app.get('/auth/custom_data', function (req, res) {
  console.log("GET /auth/custom_data");
  const payload = {
    custom_data: {
      version: {
        label: 'Version',
        value: '1.0.0'
      }
    }
  };
  payload['iss'] = host;
  const iat = parseInt(Date.now() / 1000, 10) - 5;
  payload['iat'] = iat;
  payload['exp'] = iat + 600;
  const token = jwt.sign(payload, secret, { algorithm: 'HS256' });
  res.json({ token });
});

app.post('/auth/custom_data', function (req, res) {
  console.log("POST /auth/custom_data");
  const payload = req.body;
  payload['iss'] = host;
  const iat = parseInt(Date.now() / 1000, 10) - 5;
  payload['iat'] = iat;
  payload['exp'] = iat + 600;
  const token = jwt.sign(payload, secret, { algorithm: 'HS256' });
  res.json({ token });
});

app.listen(port, function () {
  console.log(`Google CCaaS demo listing at http://localhost:${port}`);
  console.log(`CCaaS host: ${host}`);
});
