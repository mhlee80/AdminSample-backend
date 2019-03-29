# AdminSampleService-backend, API version: 1

# 개요
1. AWS API Gateway, AWS Lambda, AWS RDS를 연동한 RESTful API 구현

# 환경
1. AWS
1. nodejs 8.10
1. serverless framework

# 설치
1. VPC 생성
1. VPC 생성(Service > VPC)
1. 서브넷 2개 생성(Service > VPC > 서브넷)
  - 서로 다른 가용영역을 가진 2개의 subnet을 생성한다.
  - 현재 사용 가능한 가용 영역: ap-northeast-2a, ap-northeast-2c
1. 서브넷 그룹 생성(Service > RDS > 서브넷 그룹)
1. 보안 그룹 생성(Service > VPC > 보안 그룹)
  - Lambda에서 RDS로 접근할 수 있도록 인바운드 규칙 설정이 필요
  - 두 서브넷에서 RDS에 접근할 수 있으므로, 각 서브넷에서 RDS로의 인바운드 규칙 설정
    - 유형: MYSQL/Aurora
    - 포트: 3306
    - 소스: 어디서나(또는 두 서브넷에 대한 CIDR도 가능할 것 같다)
1. RDS 생성(Service > RDS)
  - 위에서 생성한 서브넷 그룹과 보안 그룹을 이용하여 생성

# API 배포
1. serverless framework 설치 (https://serverless.com/)
<pre><code>$ npm install serverless -g</code></pre>
1. aws configure (https://serverless.com/framework/docs/providers/aws/guide/credentials/)
<pre><code>$ aws configure
AWS Access Key ID [None]:
AWS Secret Access Key [None]:
Default region name [None]:
Default output format [None]:</code></pre>
1. 패키지 설치
<pre><code>$ npm install</code></pre>
1. src/product.js 수정
  - 계정 및 schema에 대한 정보를 dbConfig에 반영
1. serverless.yml 수정
  - 설치 과정에서 생성한 보안 그룹의 id를 provider:vpc:securityGroupIds에 추가
  - 설치 과정에서 생성한 서브넷 id들을 provider:vpc:subnetIds에 추가
1. 개발 배포
<pre><code>$ sls deploy --stage dev</code></pre>
1. 프로덕션 배포
<pre><code>$ sls deploy --stage prod</code></pre>
